import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import Sobre from "./pages/sobre/Sobre"
import { AuthProvider } from "./contexts/AuthContext"
import FormCategoria from "./components/categoria/formCategoria/FormCategoria"
import ListaCategorias from "./components/categoria/listaCategorias/ListaCategorias"
import DeletarCategoria from "./components/categoria/deletarCategoria/DeletarCategoria"
import ListaProdutos from "./components/produto/listaProdutos/ListaProdutos"
import FormProduto from "./components/produto/formProduto/FormProduto"
import DeletarProduto from "./components/produto/deletarProduto/DeletarProduto"
import Cart from "./components/cart/Cart"
import { CartProvider } from "./contexts/CartContext"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Perfil from "./pages/perfil/Perfil"


function App() {
    return (
        <CartProvider>
            <AuthProvider>
                <ToastContainer />
                <BrowserRouter >
                    <Navbar />
                    <div className='min-h-[80vh]'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/sobre" element={<Sobre />} />
                            <Route path="/categorias" element={<ListaCategorias />} />
                            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
                            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
                            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                            <Route path="/produtos" element={<ListaProdutos />} />
                            <Route path="/cadastrarProduto" element={<FormProduto />} />
                            <Route path="/editarProduto/:id" element={<FormProduto />} />
                            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/perfil" element={<Perfil />} />q
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </CartProvider>
    )
}

export default App