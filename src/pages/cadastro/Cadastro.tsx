import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Usuario from '../../models/Usuario'
import { Link, useNavigate } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import { cadastrarUsuario } from '../../service/Service'
import { toastAlerta } from '../../util/toastAlerta'

function Cadastro() {
    const logo = "https://ik.imagekit.io/raizescoletivas/raizes-logo-circle-green.png";

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [confirmaSenha, setConfirmaSenha] = useState<string>("")

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        admin: false,
    })

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar()
        }
    }, [usuario])

    function retornar() {
        navigate('/login')
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
        console.log(usuario)
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
        console.log(confirmaSenha)
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

            setIsLoading(true)

            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
                toastAlerta('Usuário cadastrado com sucesso!', 'sucesso')
            } catch (error) {
                toastAlerta('Erro ao cadastrar o usuário!', 'erro')
            }
        } else {
            toastAlerta('Dados estão inconsistentes. Verifique as informações do cadastro', 'erro')
            setUsuario({ ...usuario, senha: '' })
            setConfirmaSenha('')
        }

        setIsLoading(false)
    }

    return (
        <div className="bg-bege h-screen flex items-center justify-center">

            <div className="flex items-center justify-center flex-col gap-6 bg-white w-1/2 m-auto shadow-2xl rounded-md p-8">

                <Link to="/">
                    <img src={logo} alt="Logo do Raízes Coletivas" className="max-w-36" />
                </Link>

                <form className='flex justify-center items-center flex-col w-full gap-3'
                    onSubmit={cadastrarNovoUsuario}>

                    <h2 className='text-slate-900 text-3xl'>Cadastrar nova Conta</h2>

                    <div className="flex flex-col w-full">
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Seu nome completo"
                            className="border-2 border-slate-300 rounded p-2 outline-none focus:border-verde focus:border-2"
                            value={usuario.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Usuário:</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Digite seu e-mail"
                            className="border-2 border-slate-300 rounded p-2 outline-none focus:border-verde focus:border-2"
                            value={usuario.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="foto">Foto:</label>
                        <input
                            type="text"
                            id="foto"
                            name="foto"
                            placeholder="Link da sua foto"
                            className="border-2 border-slate-300 rounded p-2 outline-none focus:border-verde focus:border-2"
                            value={usuario.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha:</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Digite uma senha"
                            className="border-2 border-slate-300 rounded p-2 outline-none focus:border-verde focus:border-2"
                            value={usuario.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="confirmarSenha">Confirmar senha:</label>
                        <input
                            type="password"
                            id="confirmarSenha"
                            name="confirmarSenha"
                            placeholder="Confirme sua senha"
                            className="border-2 border-slate-300 rounded p-2 outline-none focus:border-verde focus:border-2"
                            value={confirmaSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                        />
                    </div>

                    <div className="flex justify-around w-full gap-8">
                        <button className='rounded text-white bg-red-700 hover:bg-red-500 w-1/2 py-2 transition delay-75 font-bold' onClick={retornar}>
                            Cancelar
                        </button>

                        <button
                            type='submit'
                            className='rounded text-white bg-verde 
                            hover:bg-verde-claro w-1/2 py-2
                           flex justify-center transition delay-75 hover:text-verde font-bold'
                        >
                            {isLoading ? <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                                <span>Cadastrar</span>
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cadastro
