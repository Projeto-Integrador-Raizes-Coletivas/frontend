import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";

function FormCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token Expirou!')
                handleLogout()
            }
        }
    }
    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/categorias")
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: { 'Authorization': token }
                })
                alert('A categoria foi atualizada com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O Token Expirou!')
                    handleLogout();
                } else {
                    alert('Erro ao atualizar a categoria.')
                }
            }

        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: { 'Authorization': token }
                })
                alert('A categoria foi cadastrada com sucesso!')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    alert('O Token Expirou!')
                    handleLogout();
                } else {
                    alert('Erro ao cadastrar o tema.')
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8  font-bold">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className=" font-bold">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name='nome'
                        className="border-2 border-slate-400 rounded p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                        onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite uma categoria válida!')}
                        onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="classificacao" className=" font-bold">Classificação da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name='classificacao'
                        className="border-2 border-slate-400 rounded p-2"
                        value={categoria.classificacao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        required
                        onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite uma Classificação válida!')}
                        onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                </div>
                <button
                    className="rounded font-bold bg-slate-400 hover:bg-slate-600
                    w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">

                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }

                </button>
            </form>
        </div>
    );
}

export default FormCategoria;