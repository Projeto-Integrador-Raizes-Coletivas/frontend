import Sobrepi from "../../assets/components/sobrepi/Sobrepi"
import Sobreps from "../../assets/components/sobreps/Sobreps"

function Home() {

    return (
        <div>
            <div className="px-32 py-36 bg-verde-claro text-5xl	font-bold text-white">
                Bem vindos ao Raízes Coletivas
            </div>

            <div className="bg-seasalt">
                <div className="px-24 py-24">
                    <h2 className="text-5xl	font-bold">Nossos Produtos</h2>
                </div>

                <div className="flex justify-start w-10/12 mx-auto gap-4">
                    <div className="card-produto bg-white w-60 flex flex-col">
                        <img className="" src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/cenourao/media/uploads/produtos/foto/dc1f0bf8b4a3file.png" alt="Imagem do produto" />
                        <p className="nome-produto">Banana Prata Orgânica 600g</p>
                        <div className="preco text-verde font-bold">R$10,99</div>
                        <button className="bg-verde text-white px-6 py-3">Adicionar</button>
                    </div>

                    <div className="card-produto bg-white w-60 flex flex-col">
                        <img className="" src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/cenourao/media/uploads/produtos/foto/dc1f0bf8b4a3file.png" alt="Imagem do produto" />
                        <p className="nome-produto">Banana Prata Orgânica 600g</p>
                        <div className="preco text-verde font-bold">R$10,99</div>
                        <button className="bg-verde text-white px-6 py-3">Adicionar</button>
                    </div>

                    <div className="card-produto bg-white w-60 flex flex-col">
                        <img className="" src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/cenourao/media/uploads/produtos/foto/dc1f0bf8b4a3file.png" alt="Imagem do produto" />
                        <p className="nome-produto">Banana Prata Orgânica 600g</p>
                        <div className="preco text-verde font-bold">R$10,99</div>
                        <button className="bg-verde text-white px-6 py-3">Adicionar</button>
                    </div>

                    <div className="card-produto bg-white w-60 flex flex-col">
                        <img className="" src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/cenourao/media/uploads/produtos/foto/dc1f0bf8b4a3file.png" alt="Imagem do produto" />
                        <p className="nome-produto">Banana Prata Orgânica 600g</p>
                        <div className="preco text-verde font-bold">R$10,99</div>
                        <button className="bg-verde text-white px-6 py-3">Adicionar</button>
                    </div>
                    <div className="flex justify-center pb-5">
                    </div>
                </div>
                <div className="flex justify-center">
                    <div id="sobres" className="container grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4 py-4">
                        <Sobrepi />
                        <Sobreps />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home