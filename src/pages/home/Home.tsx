import { Clock, GlobeHemisphereWest, Plant, Truck } from "@phosphor-icons/react"
import Carrossel from "../../components/carrossel/Carrossel";
import ListaProdutos from "../../components/produto/listaProdutos/ListaProdutos";


function Home() {

    const avisos = [
        { aviso1: "Frete grátis a partir de R$ 79,90" },
        { aviso2: "Peça até às 16h e receba amanhã" },
        { aviso3: "Produtos colhidos no dia da entrega" },
        { aviso4: "Contribua para um planeta melhor" }
    ];

    return (
        <>
            <Carrossel />

            <div className="bg-bege flex flex-row justify-center xl:gap-x-5 2xl:gap-x-20 p-2 text-sm cursor-default">
                <div className="flex gap-x-2 p-2 items-center">
                    <Truck size={20} />
                    <p>{avisos[0].aviso1}</p>
                </div>
                <div className="flex gap-x-2 p-2 items-center">
                    <Clock size={20} />
                    <p>{avisos[1].aviso2}</p>
                </div>
                <div className="flex gap-x-2 p-2 items-center">
                    <Plant size={20} />
                    <p>{avisos[2].aviso3}</p>
                </div>
                <div className="flex gap-x-2 p-2 items-center">
                    <GlobeHemisphereWest size={20} />
                    <p>{avisos[3].aviso4}</p>
                </div>
            </div>

            <ListaProdutos />
        </>
    )
}

export default Home
