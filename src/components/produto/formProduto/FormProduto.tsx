import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";

function FormProduto() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        classificacao: ''
    })

    const carregandoCategoria = categoria.classificacao === '';

    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarProdutoPorId(id: string) {
        await buscar(`/produtos/${id}`, setProduto, {
            headers: {
                Authorization: token,
            },
        })
    }

    async function buscarCategoriaPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria, {
            headers: {
                Authorization: token,
            },
        })
    }

    async function buscarCategorias() {
        await buscar('/categorias', setCategorias, {
            headers: {
                Authorization: token,
            },
        })
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarProdutoPorId(id)
        }
    }, [id])

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,
              });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id != undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                });

                alert('Produto atualizado com sucesso')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()
                } else {
                    alert('Erro ao atualizar o Produto')
                }
            }

        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                })

                alert('Produto cadastrado com sucesso');

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O token expirou, favor logar novamente')
                    handleLogout()
                } else {
                    alert('Erro ao atualizar o Produto')
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoProduto}>
                
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Produto</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                        minLength={5}
                        maxLength={100}
                        onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('O Nome deve ter no mínimo 5 e no máximo 100 caracteres!')}
                        onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="preco">Preço</label>
                    <input
                        type="text"
                        placeholder="Preco"
                        name="preco"
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.preco}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                        minLength={10}
                        maxLength={1000}
                        onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('O Preço é obrigatório')}
                        onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="foto">Foto</label>
                    <input
                        type="foto"
                        placeholder="Foto"
                        name="foto"
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                        minLength={10}
                        maxLength={1000}
                        onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        type="descricao"
                        placeholder="Descricao"
                        name="descricao"
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                        minLength={10}
                        maxLength={1000}
                        onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Categoria do Produto</p>
                    <select name="categoria" id="categoria"
                        className='border p-2 border-slate-800 rounded'
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione uma Categoria</option>
                        {categorias.map((categoria) => (
                            <>
                                <option value={categoria.id} >{categoria.classificacao}</option>
                            </>
                        ))}
                    </select>
                </div>
                <button
                    type='submit'
                    disabled={carregandoCategoria}
                    className='rounded disabled:bg-slate-200 bg-indigo-400 
                            hover:bg-indigo-800 text-white font-bold w-1/2 
                            mx-auto py-2 flex justify-center'
                >
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormProduto;