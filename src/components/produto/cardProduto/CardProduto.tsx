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

    return (
        <div>
            <div className="max-w-sm bg-white border border-gray-200 
            rounded-lg shadow p-[8px] container hover:translate-y-[-2px] min-h-[400px] w-[250px] flex flex-col justify-between">
                <div>
                <a href="#">
                    <img className="mb-2 w-[250px] h-[250px] rounded-sm" src={produto.foto} alt={`Foto do produto ${produto.nome}`} />
                </a>
                <div className="flex flex-col">
                    <div className="grid grid-cols-[5fr_4fr] mb-1">
                        <a href="#">
                            <h5 className="col-span-[2fr] font-semibold tracking-tight text-gray-900">{produto.nome}</h5>
                        </a>
                        <span className='col-span-1 bg-verde-claro text-verde text-xs font-semibold min-w-[87px] h-[24px] px-2 flex items-center rounded'>{produto.categoria?.nome} - {produto.categoria?.classificacao}</span>
                    </div>
                    <div className='max-h-[60px] container mb-2 text-sm'>
                        <span>{produto.descricao}</span>
                    </div>
                </div>
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

    )
}

export default CardProduto