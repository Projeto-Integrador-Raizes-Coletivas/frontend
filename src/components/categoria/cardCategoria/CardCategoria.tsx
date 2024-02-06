import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import "./CardCategoria.css"
import { Pencil, Trash } from "@phosphor-icons/react"
import { ReactNode, useContext } from "react"
import { AuthContext } from "../../../contexts/AuthContext"


interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {


    const { usuario, handleLogout } = useContext(AuthContext)

    let cardAdmin: ReactNode
    let cardUser: ReactNode

    if (usuario.admin == true) {
        cardAdmin = (
            <div className="center">
                <div className="article-card">
                    <div className="content">
                        <p className="data">Jan 1, 2022</p>
                        <p className="id">Categoria #{categoria.id}</p>
                        <p className="nome">{categoria.nome}</p>
                        <p className="classificacao">{categoria.classificacao}</p>
                        <Link to={`/editarCategoria/${categoria.id}`}>
                            <button className="text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 bottom-[55px] absolute right-2"><Pencil size={20} /></button>
                        </Link>
                        <Link to={`/deletarCategoria/${categoria.id}`}>
                            <button className="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 bottom-2 absolute right-2"><Trash size={20} /></button>
                        </Link>
                    </div>
                    <img src={categoria.foto} alt={`Foto do produto ${categoria.nome}`} className="FOTO" />
                </div>
            </div>
        )
    };
    if (usuario.admin == false) {
        cardUser = (
            <div className="center">
                <div className="article-card" >
                    <div className="content">
                        <p className="data">Jan 1, 2022</p>
                        <p className="id">Categoria #{categoria.id}</p>
                        <p className="nome">{categoria.nome}</p>
                        <p className="classificacao">{categoria.classificacao}</p>
                    </div>
                    <img src={categoria.foto} alt={`Foto do produto ${categoria.nome}`} className="FOTO" />
                </div >
            </div >

        )
    }
    return (
        <div className="center">
            {cardAdmin}
            {cardUser}
        </div>
    )
}

export default CardCategoria