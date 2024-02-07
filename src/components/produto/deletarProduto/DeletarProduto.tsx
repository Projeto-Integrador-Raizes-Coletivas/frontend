import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import Postagem from "../../../models/Produto"
import { buscar, deletar } from "../../../service/Service"
import { RotatingLines } from "react-loader-spinner"
import { toastAlerta } from "../../../util/toastAlerta"


function DeletarProduto() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [produto, setProduto] = useState<Postagem>({} as Postagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', "info")
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', "info")
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/delete/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Produto apagado com sucesso', "sucesso")

        } catch (error) {
            toastAlerta('Erro ao apagar a Produto', "erro")
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/produtos")
    }

    const preco = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(produto.preco);


    return (
        <div id="tela" className="flex justify-center items-center min-h-[80vh]">
            <div id="card" className='mx-auto max-w-md px-6 py-8 bg-white border-0 shadow-lg sm:rounded-3xl w-[60%]'>
                <h1 className='text-4xl font-medium text-center my-4'> Deletar Produto</h1>
                <p className='text-center font-medium mb-4'> Tem certeza de que deseja apagar a produto a seguir?</p>
            <div className="flex justify-center">
                <div id="cardproduto" className="max-w-sm bg-white border border-gray-200 
            rounded-lg shadow p-[8px] container min-h-[400px] w-[250px] flex flex-col justify-between cursor-default">

                    <div id="?????">
                        <img className="mb-2 w-[250px] h-[250px] rounded-sm" src={produto.foto} alt={`Foto do produto ${produto.nome}`} />
                        
                        <div className="flex flex-col">
                            
                            <div className="flex justify-between mb-1">
                                    <h5 className="font-semibold tracking-tight text-gray-900">{produto.nome}</h5>
                                <span className="bg-verde-claro text-verde text-xs 
                        font-semibold px-2.5 py-[1px] flex items-center rounded ms-3">{produto.categoria?.nome}</span>
                            </div>
                            <div className='max-h-[60px] container mb-2 text-sm'>
                                <span>{produto.descricao}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold text-gray-900 font-sans">R${preco}</span>
                        <button className='text-white bg-verde focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-1.5 text-center cursor-default'>
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
                <div className="relative flex gap-5 overflow-hidden pt-6 justify-center">
                    <button
                        className='text-white bg-verde hover:bg-verde-claro font-medium
                         rounded-xl text-sm w-1/3 py-3 text-center transition delay-75 hover:text-verde flex items-center justify-center object-center hover:font-medium'>
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
        </div >
    )
}

export default DeletarProduto