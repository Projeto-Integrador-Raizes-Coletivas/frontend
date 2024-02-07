import { FolderPlus, Folders, MagnifyingGlass, ShoppingCart, SignIn, SignOut, Stack, User, UserPlus, UsersThree } from "@phosphor-icons/react";
import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../util/toastAlerta";

function Navbar() {
    const logo = "https://ik.imagekit.io/raizescoletivas/raizes-logo-inline.png";

    const isLogin = location.pathname === '/login';
    const isCadastro = location.pathname === '/cadastro';

    const navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    let NavbarLogado: ReactNode
    let NavbarDeslogado: ReactNode
    let NavbarAdmin: ReactNode

    function logout() {
        handleLogout()
        toastAlerta("O usuário foi desconectado com sucesso!", "sucesso")
        navigate("/login")
    }

    if (usuario.admin == true) {
        NavbarAdmin = (
            <div className="flex gap-7 ml-28">
                <Link to="/produtos" className="flex items-center gap-2 text-white font-medium">
                    <Stack size={20} />
                    Produtos
                </Link>
                <Link to="/categorias" className="flex items-center gap-2 text-white font-medium">
                    <Folders size={20} />
                    Categorias
                </Link>
                <Link to="/sobre" className="flex items-center gap-2 text-white font-medium">
                    <UsersThree size={20} />
                    Sobre
                </Link>
                <Link to='/cart' className="flex items-center gap-2 text-white font-medium">
                    <ShoppingCart size={25} weight='bold' /></Link>
                <div className="group md:size-11 size-7">

                    <img
                        src={usuario.foto}
                        alt=""
                        className="object-cover md:border-2 border border-verde-claro rounded-full
                            bg-verde-claro bg-opacity-30 md:size-11 size-7 hover:border-white"
                    />

                    <div className="absolute hidden text-secondary-purpleDark group-hover:block w-56 bg-light-gray z-[51] bg-white right-4 rounded">
                        <ul className="items-center flex-row justify-between gap-10">
                            <li className="hover:bg-verde py-4 px-4 cursor-pointer hover:text-white">
                                <Link to="/cadastrarProduto" className="flex items-center gap-2 font-medium">
                                    <FolderPlus size={20} />
                                    Criar Produto
                                </Link>
                            </li>
                            <li className="hover:bg-verde py-4 px-4 cursor-pointer hover:text-white">
                                <Link to="/cadastrarCategoria" className="flex items-center gap-2 font-medium ">
                                    <FolderPlus size={20} />
                                    Criar categoria
                                </Link>
                            </li>
                            <li className="hover:bg-verde py-4 px-4 cursor-pointer hover:text-white">
                                <Link to="/perfil" className="flex items-center gap-2 font-medium">
                                    <User size={20} />
                                    Perfil
                                </Link>
                            </li>
                            <li className="hover:bg-verde py-4 px-4 cursor-pointer hover:text-white">
                                <Link to="/" className="flex items-center gap-2 font-medium" onClick={logout}>
                                    <SignOut size={20} />
                                    Sair
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else if (usuario.token !== '') {
        NavbarLogado = (
            <div className="flex gap-7 ml-28" >

                <Link to="/produtos" className="flex items-center gap-2 text-white font-medium">
                    <Stack size={20} />
                    Produtos
                </Link>
                <Link to="/categorias" className="flex items-center gap-2 text-white font-medium">
                    <Folders size={20} />
                    Categorias
                </Link>
                <Link to="/sobre" className="flex items-center gap-2 text-white font-medium">
                    <UsersThree size={20} />
                    Sobre
                </Link>
                <Link to='/cart' className="flex items-center gap-2 text-white font-medium">
                    <ShoppingCart size={25} weight='bold' /></Link>
                <div className="group md:size-11 size-7">

                    <img
                        src={usuario.foto}
                        alt=""
                        className="object-cover md:border-2 border border-verde-claro rounded-full
                            bg-verde-claro bg-opacity-30 md:size-11 size-7 hover:border-white"
                    />

                    <div className="absolute hidden text-secondary-purpleDark group-hover:block w-56 bg-light-gray z-[51] bg-white right-4 rounded">
                        <ul className="items-center flex-row justify-between gap-10">
                            <li className="hover:bg-verde py-4 px-4 cursor-pointer hover:text-white">
                                <Link to="/perfil" className="flex items-center gap-2 font-medium">
                                    <User size={20} />
                                    Perfil
                                </Link>
                            </li>
                            <li className="hover:bg-verde py-4 px-4 cursor-pointer hover:text-white">
                                <Link to="/" className="flex items-center gap-2 font-medium" onClick={logout}>
                                    <SignOut size={20} />
                                    Sair
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }


    if (usuario.token == '') {
        NavbarDeslogado = (
            <div className="flex gap-7 ml-28">
                <Link to="/produtos" className="flex items-center gap-2 text-white font-medium">
                    <Stack size={20} />
                    Produtos
                </Link>
                <Link to="/categorias" className="flex items-center gap-2 text-white font-medium">
                    <Folders size={20} />
                    Categorias
                </Link>
                <Link to="/sobre" className="flex items-center gap-2 text-white font-medium">
                    <UsersThree size={20} />
                    Sobre
                </Link>
                <Link to="/cadastro" className="flex items-center gap-2 text-white font-medium">
                    <UserPlus size={20} />
                    Cadastrar
                </Link>

                <Link to="/login" className="flex items-center gap-2 text-white font-medium">
                    <SignIn size={20} />
                    Login
                </Link>
                <Link to='/cart' className="flex items-center gap-2 text-white font-medium">
                    <ShoppingCart size={25} weight='bold' /></Link>
            </div>
        )
    }

    if (isLogin || isCadastro)
        return null;

    return (
        <div className="flex items-center bg-verde h-[68px] px-24 py-2">
            <Link to="/" className="flex-none me-28">
                <img src={logo} alt="Logo do Raízes Coletivas" className="max-w-36" />
            </Link>

            <div className="flex-1 flex justify-center items-center relative w-2/4">
                <input type="text" placeholder="Pesquisar" className="h-11 w-full rounded-lg px-4 py-4 focus:outline-none" />
                <MagnifyingGlass size={20} color="#356760" className="absolute right-4" />
            </div>
            {NavbarLogado}
            {NavbarDeslogado}
            {NavbarAdmin}
        </div>
    );
}


export default Navbar;
