import { Link} from 'react-router-dom'
import Produto from '../../../models/Produto'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import { CartContext } from '../../../contexts/CartContext'

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {
    
    const { usuario } = useContext(AuthContext)

    const { adicionarProduto } = useContext(CartContext)

    let BotaoLogado: ReactNode
    let BotaoDeslogado: ReactNode
    let BotaoAdmin: ReactNode


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
    return (
        <div>
            {BotaoLogado}
            {BotaoDeslogado}
            {BotaoAdmin}
        </div>

    )
}

export default CardProduto