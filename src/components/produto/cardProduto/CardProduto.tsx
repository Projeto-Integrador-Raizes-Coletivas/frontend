import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { ReactNode, useContext, useState } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import { CartContext } from '../../../contexts/CartContext'
import "./CardProduto.css"
import { DotsThree, Pencil, Trash } from '@phosphor-icons/react'

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {

    const { usuario } = useContext(AuthContext)
    const [Show, setShow] = useState(false);
    const { adicionarProduto } = useContext(CartContext)

    let BotaoLogado: ReactNode
    let BotaoDeslogado: ReactNode
    let BotaoAdmin: ReactNode

    const preco = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(produto.preco);

    return (
        <div>
            <div className="max-w-sm bg-white border border-gray-200 
            rounded-lg shadow p-[8px] container hover:translate-y-[-2px] min-h-[400px] w-[250px] flex flex-col justify-between">
                <div>
                    <DotsThree
                        size={32}
                        className={
                            usuario.admin === true
                                ? 'absolute mt-3 ml-3 bg-black bg-opacity-20 hover:bg-opacity-60 rounded-full z-10 text-white cursor-pointer'
                                : 'hidden'
                        }
                        onClick={() => setShow(!Show)}
                    />
                    <img className="mb-2 w-[230px] h-[230px] rounded-sm" src={produto.foto} alt={`Foto do produto ${produto.nome}`} />
                    <div className="flex flex-col">
                        <div className="flex justify-between mb-1">
                            <h5 className="font-semibold tracking-tight text-gray-900">{produto.nome}</h5>
                            <Link to="/categorias/">
                                <span className="bg-verde-claro text-verde text-xs 
                        font-semibold px-2.5 py-[1px] flex items-center rounded ms-3">{produto.categoria?.nome}</span>
                            </Link>
                        </div>
                        <div className='max-h-[60px] container mb-2 text-sm'>
                            <span>{produto.descricao}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-gray-900 font-sans">R${preco}</span>
                    <div className={Show ? 'flex gap-1' : 'hidden'}>
                        <Link to={`/editarProduto/${produto.id}`}>
                            <button className="text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 font-medium rounded-full px-2 py-1.5"><Pencil size={20} /></button>
                        </Link>
                        <Link to={`/deletarProduto/${produto.id}`}>
                            <button className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-700 font-medium rounded-full px-2 py-1.5">
                                <Trash size={20} /></button>
                        </Link>
                    </div>


                    <Link to={`/login `}
                        className=''>
                        <button className='text-white bg-verde hover:bg-verde-claro focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-sm px-3 py-1.5 text-center transition delay-75'
                            onClick={() => adicionarProduto(produto)}>
                            Comprar
                        </button>
                    </Link>
                </div>
            </div>
        </div >

    )
}

export default CardProduto