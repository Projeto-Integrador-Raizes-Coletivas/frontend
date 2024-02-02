import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../service/Service";
import { DNA } from "react-loader-spinner";
import Produto from "../../../models/Produto";
import CardProduto from "../cardProduto/CardProduto";

function ListaProdutos() {


    const [produtos, setProdutos] = useState<Produto[]>([]);

    const { usuario } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarProdutos() {
            await buscar('/produtos/all', setProdutos, {
                headers: {
                    Authorization: token,
                },
            })
        }

    useEffect(() => {
        buscarProdutos()
    }, [produtos.length])

    return (
        <>
            {produtos.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className='container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
            >
                {produtos.map((produto) => (
                    <CardProduto key={produto.id} produto={produto} />
                ))}

            </div>
        </>
    );
}

export default ListaProdutos;