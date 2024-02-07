import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import Produto from "../../../models/Produto";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";
import { toastAlerta } from "../../../util/toastAlerta";
import "./FormProduto.css";

function FormProduto() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        classificacao: '',
        foto: ""
    })

    const carregandoCategoria = categoria.nome === '';

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
            toastAlerta('Você precisa estar logado', "info");
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

                toastAlerta('Produto atualizado com sucesso', "sucesso")

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', "info")
                    handleLogout()
                } else {
                    toastAlerta('Erro ao atualizar o Produto', "erro")
                }
            }

        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                })

                toastAlerta('Produto cadastrado com sucesso', "sucesso");

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O token expirou, favor logar novamente', "info")
                    handleLogout()
                } else {
                    toastAlerta('Erro ao cadastrar o Produto', "erro")
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (

        <div className="flex justify-center items-center min-h-[80vh]">
            <div className="mx-auto max-w-md px-6 py-8 bg-white border-0 shadow-lg sm:rounded-3xl w-[60%]">
                <h1 className="text-2xl font-bold mb-8"> {id === undefined ? 'Cadastrar Produto' : 'Editar Produto'} </h1>
                <form id="form" className="" onSubmit={gerarNovoProduto}>
                    <div className="relative z-0 w-full mb-5">
                        <input
                            type="text"
                            placeholder=""
                            name="nome"
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            value={produto.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            required
                            minLength={3}
                            maxLength={255}
                            onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('O Nome deve ter no mínimo 3 e no máximo 255 caracteres!')}
                            onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                        />
                        <label htmlFor="nome" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nome do produto</label>
                    </div>
                    <div className="relative z-0 w-full mb-5">
                        <input
                            type="number"
                            placeholder=""
                            name="preco"
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            value={produto.preco}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            required
                            onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('O Preço é obrigatório')}
                            onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                        />
                        <label htmlFor="preco" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Preço</label>
                    </div>
                    <div className="relative z-0 w-full mb-5">
                        <input
                            type="text"
                            placeholder=""
                            name="foto"
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            value={produto.foto}
                            minLength={3}
                            maxLength={500}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            required
                            onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('O link da foto deve conter no mínimo 3 e no máximo 500 caracteres!')}
                            onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                        />
                        <label htmlFor="foto" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Link da foto</label>
                    </div>
                    <div className="relative z-0 w-full mb-5">
                        <input
                            type="text"
                            placeholder=""
                            name="descricao"
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            value={produto.descricao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            minLength={3}
                            maxLength={500}
                            onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                        />
                        <label htmlFor="descricao" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Descrição</label>
                    </div>
                    <div className="relative z-0 w-full mb-5">
                        <select name="categoria" id="categoria"
                            className='pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 '
                            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                        >
                            <option value="" selected disabled>Selecione uma Categoria</option>
                            {categorias.map((categoria) => (
                                <>
                                    <option value={categoria.id}>{categoria.nome} - {categoria.classificacao}</option>
                                </>
                            ))}
                        </select>
                    </div>

                    <button 
                    type='submit'
                    disabled={carregandoCategoria}
                    className="text-white bg-verde hover:bg-verde-claro font-medium rounded text-sm w-full py-3 text-center
                    transition delay-75 hover:text-verde flex items-center justify-center object-center hover:font-semibold">
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span> {id !== undefined ? 'Atualizar' : 'Cadastrar'} </span>
                        }
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormProduto;