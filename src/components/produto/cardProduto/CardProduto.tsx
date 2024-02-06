import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import { CartContext } from '../../../contexts/CartContext'
import "./CardProduto.css"

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {

    const { usuario } = useContext(AuthContext)

    const { adicionarProduto } = useContext(CartContext)

    let BotaoLogado: ReactNode
    let BotaoDeslogado: ReactNode
    let BotaoAdmin: ReactNode

    const preco = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(produto.preco);

    if (usuario.usuario == 'root@root.com') {
        BotaoAdmin = (

            <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>

                <div>

                    <div className='p-4 '>
                        <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
                        <p>{produto.descricao}</p>
                        <p>Categoria: {produto.categoria?.classificacao}</p>
                        <p>Preço: {(produto.preco)}</p>
                        <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
                            <img
                                className='w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10'
                                src={produto.foto} alt={`Foto do produto ${produto.nome}`} />
                        </div>

                    </div>
                </div>
                <div className="flex">
                    <Link to={`/editarProduto/${produto.id}`}
                        className='w-full text-white bg-verde-claro 
                    hover:bg-verde flex items-center justify-center py-2'>
                        <button>Editar</button>
                    </Link>
                    <Link to={`/deletarProduto/${produto.id}`}
                        className='text-white bg-red-500 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
        )
    } else if (usuario.token !== '') {
        BotaoLogado = (
            <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>

                <div>

                    <div className='p-4 '>
                        <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
                        <p>{produto.descricao}</p>
                        <p>Categoria: {produto.categoria?.classificacao}</p>
                        <p>Preço: {(produto.preco)}</p>
                        <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
                            <img
                                className='w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10'
                                src={produto.foto} alt={`Foto do produto ${produto.nome}`} />
                        </div>

                    </div>
                </div>
                <div className="flex">
                    <Link to={`/cart`}
                        className='w-full text-white bg-verde-claro 
                    hover:bg-verde flex items-center justify-center py-2'>
                        <button className='w-full text-white bg-teal-500 
                        hover:bg-teal-900 flex items-center 
                        justify-center py-2'
                            onClick={() => adicionarProduto(produto)}>
                            Comprar
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    if (usuario.token == '') {
        BotaoDeslogado = (
            <div className='border-slate-900 border 
                    flex flex-col rounded overflow-hidden justify-between'>

                <div>

                    <div className='p-4 '>
                        <h4 className='text-lg font-semibold uppercase'>{produto.nome}</h4>
                        <p>{produto.descricao}</p>
                        <p>Categoria: {produto.categoria?.classificacao}</p>
                        <p>Preço: {(produto.preco)}</p>
                        <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
                            <img
                                className='w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10'
                                src={produto.foto} alt={`Foto do produto ${produto.nome}`} />
                        </div>

                    </div>
                </div>
                <div className="flex">
                    <Link to={`/login `}
                        className='w-full text-white bg-verde-claro 
                            hover:bg-verde flex items-center justify-center py-2'>
                        <button className='w-full text-white bg-teal-500 
                        hover:bg-teal-900 flex items-center justify-center py-2'
                            onClick={() => adicionarProduto(produto)}>
                            Comprar
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="max-w-sm bg-white border border-gray-200 
            rounded-lg shadow p-[8px] w-[237px] h-[350px] hover:translate-y-[-2px] hover:box[0 -14px]">
                <a href="#">
                    <img className="mb-2 w-[221px] h-[196px] rounded-sm" src={produto.foto} alt={`Foto do produto ${produto.nome}`} />
                </a>
                <div className="">
                    <div className="flex justify-between mb-1">
                        <a href="#">
                            <h5 className="font-semibold tracking-tight text-gray-900">{produto.nome}</h5>
                        </a>
                        <span className="bg-verde-claro text-verde text-xs 
                        font-semibold px-2.5 py-[1px] flex items-center rounded ms-3">{produto.categoria?.nome}</span>
                    </div>
                    <div className='h-[60px] mb-2 text-sm'>
                        <span>{produto.descricao}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold text-gray-900 font-sans">R${preco}</span>
                        <Link to={`/login `}
                            className=''>
                            <button className='text-white bg-verde hover:bg-verde-claro focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-sm px-3 py-1.5 text-center transition delay-75'
                                onClick={() => adicionarProduto(produto)}>
                                Comprar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardProduto