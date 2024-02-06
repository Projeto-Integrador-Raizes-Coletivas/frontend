﻿import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";


function DeletarCategoria() {

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

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {

        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`, {
                headers: { 'Authorization': token }
            })
            alert('A categoria foi excluída com sucesso!')
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O Token Expirou!')
                handleLogout();
            } else {
                alert('Erro ao excluir a categoria.')
            }

        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className="flex justify-center items-center min-h-[80vh]">
            <div className='mx-auto max-w-md px-6 py-8 bg-white border-0 shadow-lg sm:rounded-3xl w-[60%]'>
                <h1 className='text-4xl font-medium text-center my-4'> Deletar Categoria</h1>
                <p className='text-center font-medium mb-4'> Tem certeza de que deseja apagar a categoria a seguir?</p>
                <div className="center">
                    <div className="article-card">
                        <div className="content">
                            <p className="data">Jan 1, 2022</p>
                            <p className="id">Categoria #{categoria.id}</p>
                            <p className="nome">{categoria.nome}</p>
                            <p className="classificacao">{categoria.classificacao}</p>
                        </div>
                        <img src="https://www.portaldojardim.com/pdj/wp-content/uploads/lemon-1117565_1280.jpg" alt="article-cover" className="FOTO" />
                    </div>
                </div>
                <div className="relative flex gap-5 overflow-hidden pt-6 justify-center">
                    <button
                        className='text-white bg-verde hover:bg-verde-claro font-medium
                         rounded-xl text-sm w-1/3 py-3 text-center transition delay-75 hover:text-verde flex items-center justify-center object-center hover:font-medium'
                        onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span className="relative">Sim</span>
                        }
                    </button>
                    <button className="text-white bg-red-500 hover:bg-red-700 font-medium
                         rounded-xl text-sm w-1/3 py-3 text-center transition delay-75 flex items-center justify-center object-center hover:font-medium" onClick={retornar}>
                        <span className="relative">Cancelar</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria