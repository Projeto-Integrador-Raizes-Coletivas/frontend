import { ReactNode, createContext, useState } from "react"
import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../service/Service"
import { toastAlerta } from "../util/toastAlerta"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(Usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProvidersProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProvidersProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: "",
        admin: false,
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)

        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            toastAlerta("Login feito com sucesso", "sucesso")
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            toastAlerta("Dados de login incorretos!", "erro")
            setIsLoading(false)
        }

    }
    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: "",
            admin: false,
        });
    }
    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}