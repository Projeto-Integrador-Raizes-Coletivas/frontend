import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import CardCart from "../cardcart/CardCart";

function Cart() {

    const navigate = useNavigate();

    const { items, limparCart } = useContext(CartContext)

    return (
        <div className="flex flex-col justify-center">

            <h1 className="text-4xl text-center my-4">
                Carrinho de compras
            </h1>
            <h2 className="text-2xl text-center my-4">
                {items.length === 0 ? 'O carrinho está vazio!' : ''}
            </h2>
            <div className='container mx-auto my-4 grid grid-cols-1 
                            md:grid-cols-2 lg:grid-cols-5 gap-4'>
                {
                    items.map(produto => (
                        <CardCart key={produto.id} item={produto} />
                    ))
                }
            </div>

            <button className="bg-verde text-white hover:bg-verde-claro hover:text-verde transition delay-75 rounded w-1/4 py-3 mx-auto flex justify-center items-center font-bold"
                type="submit"
                disabled={items.length === 0 ? true : false}
                onClick={limparCart}>
                Finalizar Compra
            </button>
        </div>
    )
}

export default Cart