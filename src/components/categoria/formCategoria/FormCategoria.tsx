import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import { toastAlerta } from "../../../util/toastAlerta";

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
                toastAlerta('O token Expirou!', "info")
                handleLogout()
            }
        }
    }
    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado!', "info")
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
                toastAlerta('A categoria foi atualizada com sucesso!', "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O Token Expirou!', "erro")
                    handleLogout();
                } else {
                    toastAlerta('Erro ao atualizar a categoria.', "erro")
                }
            }

        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, {
                    headers: { 'Authorization': token }
                })
                toastAlerta('A categoria foi cadastrada com sucesso!', "sucesso")
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlerta('O Token Expirou!',"info")
                    handleLogout();
                } else {
                    toastAlerta('Erro ao cadastrar o Categoria.', "erro")
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div className="mx-auto max-w-md px-6 py-8 bg-white border-0 shadow-lg sm:rounded-3xl w-[60%]">
                <h1 className="text-2xl font-bold mb-8"> {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'} </h1>
                <form id="form" className="" onSubmit={gerarNovaCategoria}>
                    <div className="relative z-0 w-full mb-5">
                        <input
                            type="text"
                            placeholder=""
                            name='nome'
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            value={categoria.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            required
                            onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite uma nome categoria válida!')}
                            onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                        />
                        <label htmlFor="nome" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Nome da Categoria</label>
                    </div>
                    <div className="relative z-0 w-full mb-5">

                        <input
                            type="text"
                            placeholder=""
                            name='classificacao'
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            value={categoria.classificacao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            required
                            onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite uma Classificação válida!')}
                            onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                        />
                        <label htmlFor="classificacao" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Classificação</label>
                    </div>
                    <div className="relative z-0 w-full mb-5">

                        <input
                            type="text"
                            placeholder=""
                            name='classificacao'
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            value={categoria.classificacao}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            required
                            onInvalid={e => (e.target as HTMLInputElement).setCustomValidity('Digite uma Classificação válida!')}
                            onInput={e => (e.target as HTMLInputElement).setCustomValidity('')}
                        />
                        <label htmlFor="classificacao" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Foto</label>
                    </div>

                    <button id="button" className="text-white bg-verde hover:bg-verde-claro font-medium rounded text-sm w-full py-3 text-center transition delay-75 hover:text-verde flex items-center justify-center object-center hover:font-semibold"
                        type="submit">
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>
                                {id === undefined ? 'Cadastrar' : 'Atualizar'}
                            </span>
                        }
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormCategoria;