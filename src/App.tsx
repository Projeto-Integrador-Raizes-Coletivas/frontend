import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import Sobre from "./pages/sobre/Sobre"
import { AuthProvider } from "./contexts/AuthContext"
import DeletarCategoria from "./components/categoria/deletarCategoria/DeletarCategoria"

function App() {
    return (
        <>
            <AuthProvider>
                <BrowserRouter >
                    <Navbar />
                    <div className='min-h-[80vh]'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/sobre" element={<Sobre />} />
                            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                            
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default App