import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
    const logo = "/src/assets/img/raizes-logo-circle-green.png";

    const navigate = useNavigate();

    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(() => {
        if (usuario.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

    return (
        <div className='bg-bege h-screen flex items-center justify-center'>

            <div className="flex items-center justify-center flex-col gap-6 bg-white w-1/3 m-auto shadow-2xl rounded-md p-8">

                <Link to="/">
                    <img src={logo} alt="Logo do Raízes Coletivas" className="max-w-36" />
                </Link>

                <form className="flex justify-center items-center flex-col w-full gap-5" onSubmit={login}>
                    <h2 className="text-slate-900 text-3xl">Entrar na sua conta</h2>

                    <div className="flex flex-col w-full">
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Digite seu e-mail"
                            className="border-2 border-slate-300 rounded p-2 outline-none focus:border-verde focus:border-2"
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Digite sua senha"
                            className="border-2 border-slate-300 rounded p-2 outline-none focus:border-verde focus:border-2"
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <button
                        type='submit'
                        className="rounded bg-verde flex justify-center hover:bg-verde-claro text-white w-full py-2 transition delay-75 hover:text-verde">

                        {isLoading ? <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                            <span className='font-bold'>Entrar</span>
                        }
                    </button>

                    <hr className="border-verde w-3/5" />

                    <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-verde hover:underline font-bold">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
            </div>
        </div >
    );
}

export default Login;
