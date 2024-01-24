// import { Link } from "react-router-dom"

function Navbar() {
''
    return (
        <>
            <div className="grid grid-cols-8 bg-verde">


                <div className="col-span-4 flex justify-start">
                    
                  {/* <Link to='/home'> */}
                   <img
                        src="https://ik.imagekit.io/r79tg58za/logo-no-background.png?updatedAt=1705677233736"
                        alt="Logo"
                        className="w-3/12 px-10 py-2"
                    />
                {/* </Link> */}

                </div>


                <div className="col-span-1  text-white font-bold flex justify-center items-center hover:bg-verde-claro">
                    <p>Produtos</p>
                </div>

                <div className="col-span-1  text-white font-bold flex justify-center items-center hover:bg-verde-claro">
                    <p>Cadastrar</p>
                </div>

                <div className="col-span-1 text-white font-bold flex justify-center items-center hover:bg-verde-claro">
                    <p>Login</p>
                </div>

                <div className="col-span-1  text-white font-bold flex justify-center items-center hover:bg-verde-claro">
                    <p>Sair</p>
                </div>

            </div>

        </>
    )
}

export default Navbar