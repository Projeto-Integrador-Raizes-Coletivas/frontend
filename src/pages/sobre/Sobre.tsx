import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import './Sobre.css'

function Sobre() {
    return (
        <div id="container" className="bg-seasalt flex justify-center">
            <div id="subcontainer" className="flex flex-col items-center mx-8">
                <div id="texto" className="flex flex-col  border-solid rounded-3xl  bg-white  w-[420px] md:w-[64%] mt-5 mb-10 shadow-lg shadow-bege hover:shadow-verde transition ease-in-out hover:scale-[103%] delay-50 duration-700 ">
                    <h1 className="text-2xl md:text-5xl my-[32px] font-bold text-center">Sobre</h1>
                    <p className="md:text-xl">Vamos todos cantar de coração
                        A Cruz de Malta é o meu pendão
                        Tu tens o nome do heroico português
                        Vasco da Gama, a tua fama assim se fez</p>

                    <p className="md:text-xl">
                        Tua imensa torcida é bem feliz
                        Norte-Sul, Norte-Sul deste Brasil
                        Tua estrela, na terra a brilhar
                        Ilumina o mar</p>

                    <p className="md:text-xl">
                        No atletismo, és um braço
                        No remo, és imortal
                        No futebol, és um traço
                        De união Brasil-Portugal</p>
                    <div id="img" className="flex place-items-center justify-center m-10">
                        <img src="https://ik.imagekit.io/padrin/raizes-coletivas-high-resolution-logo-transparent.png?updatedAt=1705711926998" alt="" width={"40%"} />
                    </div>
                </div>
                <div id='cards' className='grid md:grid-cols-2 gap-10 content-center w-[70%] md:w-[100%] 2xl:w-[70%] mb-10' >
                    <div id='card' className='grid grid-cols-[1fr_2fr] border-solid rounded-3xl shadow-lg hover:shadow-verde bg-white
                    hover:scale-105 delay-50 duration-700'>
                        <div id='img' className='flex flex-col place-items-center justify-center ml-[10%] py-2'>
                            <img src="https://ik.imagekit.io/padrin/711769.png?updatedAt=1705680795717" alt="" width={"200px"} />
                        </div>
                        <div className='flex flex-col w-full justify-around'>
                            <div className='flex flex-col justify-center items-center'>
                                <h2>Amanda Tsai</h2>
                                <h3>Desenvolvedora Full Stack Java</h3>
                            </div>
                            <div id='text'>
                                <p>"texto"</p>
                                <p>~Escritor</p>
                            </div>
                            <div id="links" className="flex flex-row items-center gap-4 text-center justify-center ">
                                <div id='github'>
                                    <a href=""><GithubLogo size={40} weight='regular' color='white' /></a>
                                </div>
                                <div id='linkedin'>
                                    <a href=""><LinkedinLogo size={40} weight='regular' color='white' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='card' className='grid grid-cols-[1fr_2fr] border-solid rounded-3xl shadow-lg hover:shadow-verde bg-white
                    hover:scale-105 delay-50 duration-700'>
                        <div id='img' className='flex flex-col place-items-center justify-center ml-[10%] py-2'>
                            <img src="https://ik.imagekit.io/padrin/711769.png?updatedAt=1705680795717" alt="" width={"200px"} />
                        </div>
                        <div className='flex flex-col w-full justify-around'>
                            <div className='flex flex-col justify-center items-center'>
                                <h2>Bryan Vieira</h2>
                                <h3>Desenvolvedor Full Stack Java</h3>
                            </div>
                            <div id='text'>
                                <p>"texto"</p>
                                <p>~Escritor</p>
                            </div>
                            <div id="links" className="flex flex-row items-center gap-4 text-center justify-center ">
                                <div id='github'>
                                    <a href=""><GithubLogo size={40} weight='regular' color='white' /></a>
                                </div>
                                <div id='linkedin'>
                                    <a href=""><LinkedinLogo size={40} weight='regular' color='white' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='card' className='grid grid-cols-[1fr_2fr] border-solid rounded-3xl shadow-lg hover:shadow-verde bg-white
                    hover:scale-105 delay-50 duration-700'>
                        <div id='img' className='flex flex-col place-items-center justify-center ml-[10%] py-2'>
                            <img src="https://ik.imagekit.io/padrin/711769.png?updatedAt=1705680795717" alt="" width={"200px"} />
                        </div>
                        <div className='flex flex-col w-full justify-around'>
                            <div className='flex flex-col justify-center items-center'>
                                <h2>Carolina Dias</h2>
                                <h3>Desenvolvedora Full Stack Java</h3>
                            </div>
                            <div id='text'>
                                <p>"texto"</p>
                                <p>~Escritor</p>
                            </div>
                            <div id="links" className="flex flex-row items-center gap-4 text-center justify-center ">
                                <div id='github'>
                                    <a href=""><GithubLogo size={40} weight='regular' color='white' /></a>
                                </div>
                                <div id='linkedin'>
                                    <a href=""><LinkedinLogo size={40} weight='regular' color='white' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='card' className='grid grid-cols-[1fr_2fr] border-solid rounded-3xl shadow-lg hover:shadow-verde bg-white
                    hover:scale-105 delay-50 duration-700'>
                        <div id='img' className='flex flex-col place-items-center justify-center ml-[10%] py-2'>
                            <img src="https://ik.imagekit.io/padrin/711769.png?updatedAt=1705680795717" alt="" width={"200px"} />
                        </div>
                        <div className='flex flex-col w-full justify-around'>
                            <div className='flex flex-col justify-center items-center'>
                                <h2>Gabriel Rodrigues</h2>
                                <h3>Desenvolvedor Full Stack Java</h3>
                            </div>
                            <div id='text'>
                                <p>"texto"</p>
                                <p>~Escritor</p>
                            </div>
                            <div id="links" className="flex flex-row items-center gap-4 text-center justify-center ">
                                <div id='github'>
                                    <a href=""><GithubLogo size={40} weight='regular' color='white' /></a>
                                </div>
                                <div id='linkedin'>
                                    <a href=""><LinkedinLogo size={40} weight='regular' color='white' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='lastcard' className='content-center 2xl:w-[37%] mb-10'>
                    <div id='card' className='grid grid-cols-[1fr_2fr] border-solid rounded-3xl shadow-lg hover:shadow-verde bg-white
                    hover:scale-105 delay-50 duration-700'>
                        <div id='img' className='flex flex-col place-items-center justify-center ml-[10%] py-2'>
                            <img src="https://ik.imagekit.io/padrin/711769.png?updatedAt=1705680795717" alt="" width={"200px"} />
                        </div>
                        <div className='flex flex-col w-full justify-around'>
                            <div className='flex flex-col justify-center items-center'>
                                <h2>Jeniffer Ribeiro</h2>
                                <h3>Desenvolvedora Full Stack Java</h3>
                            </div>
                            <div id='text'>
                                <p>"texto"</p>
                                <p>~Escritor</p>
                            </div>
                            <div id="links" className="flex flex-row items-center gap-4 text-center justify-center ">
                                <div id='github'>
                                    <a href=""><GithubLogo size={40} weight='regular' color='white' /></a>
                                </div>
                                <div id='linkedin'>
                                    <a href=""><LinkedinLogo size={40} weight='regular' color='white' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Sobre