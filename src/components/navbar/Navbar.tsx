import { MagnifyingGlass, SignIn, SignOut, Stack, User, UsersThree } from "@phosphor-icons/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
    const logo = "/src/assets/img/raizes-logo-inline.png";

    const navigate = useNavigate()

    const { handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert("O usuário foi desconectado com sucesso!")
        navigate("/login")
    }

    return (
        <div className="flex items-center bg-verde h-[68px] px-24 py-2">
            <Link to="/" className="flex-none me-28">
                <img src={logo} alt="Logo do Raízes Coletivas" className="max-w-36" />
            </Link>

            <div className="flex-1 flex justify-center items-center relative w-2/4">
                <input type="text" placeholder="Pesquisar" className="h-11 w-full rounded-lg px-4 py-4 focus:outline-none" />
                <MagnifyingGlass size={20} color="#356760" className="absolute right-4" />
            </div>

            <div className="flex gap-7 ml-28">
                <Link to="/produtos" className="flex items-center gap-2 text-white font-medium">
                    <Stack size={20} />
                    Produtos
                </Link>

                <Link to="/sobre" className="flex items-center gap-2 text-white font-medium">
                    <UsersThree size={20} />
                    Sobre
                </Link>

                <Link to="/cadastro" className="flex items-center gap-2 text-white font-medium">
                    <User size={20} />
                    Cadastrar
                </Link>

                <Link to="/login" className="flex items-center gap-2 text-white font-medium">
                    <SignIn size={20} />
                    Login
                </Link>

                <Link to="/categorias" className="flex items-center gap-2 text-white font-medium">
                    CATEGORIAS
                    </Link>

                <Link to="/cadastrarCategoria" className="flex items-center gap-2 text-white font-medium">
                    CREATE CATEGORIAS
                </Link>

                <div className="flex items-center gap-2 text-white font-medium cursor-pointer" onClick={logout}>
                    <SignOut size={20} />
                    Sair
                </div>
            </div>
        </div>
    );
}

export default Navbar;