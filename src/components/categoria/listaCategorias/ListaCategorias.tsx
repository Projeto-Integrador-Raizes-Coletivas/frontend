import { useContext, useEffect, useState } from "react"
import Categoria from "../../../models/Categoria"
import { buscar } from "../../../service/Service"
import { DNA } from "react-loader-spinner"
import CardCategoria from "../cardCategoria/CardCategoria"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import { toastAlerta } from "../../../util/toastAlerta"

function ListaCategorias() {

    const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token


    async function buscarCategorias() {
        await buscar('/categorias', setCategorias, {
            headers: {
                Authorization: token
            },
        })
    }


    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>
            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                        <>
                            {categorias.map((categoria) => (
                                <>
                                    <CardCategoria key={categoria.id} categoria={categoria} />
                                </>
                            ))}
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias;