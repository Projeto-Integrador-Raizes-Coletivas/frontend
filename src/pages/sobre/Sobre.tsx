import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import './Sobre.css'

function Sobre() {
    return (
        <div id="container" className="bg-seasalt flex justify-center">
            <div id="subcontainer" className="flex flex-col items-center">
                <div className='items-center flex'>
                    <img src="https://ik.imagekit.io/padrin/Pi/Bem%20Vindo%20ao%20mundo%20mais%20verde!%20(1).png?updatedAt=1706659675717" alt="" />
                </div>
                <div id="texto" className=' mt-10 mb-3 mx-[33%]'>
                    <p> Raizes Coletivas é um projeto inspirado em um dos Objetivos de Desenvolvimento Sustentável da ONU - a ODS 2 - Fome Zero e Agricultura Sustentável.
                        Nossa missão é comercializar produtos frescos e orgânicos, com o menor impacto ambiental e reverter parte dos lucros para hortas coletivas, com o objetivo distribuir para comunidades locais.</p>
                </div>
                <div className='w-[33%] bg-verde mb-10'>
                    <p className='text-transparent'>/</p>
                </div>

                <div id='cards' className='grid xl:grid-cols-2 gap-10 content-center w-[70%] md:w-[70%] xl:w-[90%] 2xl:w-[70%] mb-10' >
                    <div id='card' className='grid grid-cols-[1fr_2fr] border-solid rounded-3xl shadow-lg hover:shadow-verde bg-white
                    hover:scale-105 delay-50 duration-700 pb-2 md:pb-1'>
                        <div id='img' className='flex flex-col place-items-center justify-center ml-[10%] py-2'>
                            <img src="https://ik.imagekit.io/padrin/Pi/Amandinha.png?updatedAt=1706652234630" alt="" width={"200px"} />
                        </div>
                        <div className='flex flex-col w-full justify-around'>
                            <div className='flex flex-col justify-center items-center'>
                                <h2>Amanda Tsai</h2>
                                <h3>Desenvolvedora Full Stack Java</h3>
                            </div>
                            <div id='text'>
                                <p>"Aquele que deslocou a montanha é o que começou a remover as pequenas pedras"</p>
                                <p>~Autor desconhecido</p>
                            </div>
                            <div id="links" className="flex flex-row items-center gap-4 text-center justify-center ">
                                <div id='github'>
                                    <a href="https://github.com/amandats4i" target='_blank'><GithubLogo size={40} weight='regular' color='white' /></a>
                                </div>
                                <div id='linkedin'>
                                    <a href="https://www.linkedin.com/in/amandapereira2000/" target='_blank'><LinkedinLogo size={40} weight='regular' color='white' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='card' className='grid grid-cols-[1fr_2fr] border-solid rounded-3xl shadow-lg hover:shadow-verde bg-white
                    hover:scale-105 delay-50 duration-700 pb-2 md:pb-1'>
                        <div id='img' className='flex flex-col place-items-center justify-center ml-[10%] py-2 '>
                            <img src="https://ik.imagekit.io/padrin/Pi/Eu.png?updatedAt=1706652222241" alt="" width={"200px"} />
                        </div>
                        <div className='flex flex-col w-full justify-around'>
                            <div className='flex flex-col justify-center items-center'>
                                <h2>Bryan S. Vieira</h2>
                                <h3>Desenvolvedor Full Stack Java</h3>
                            </div>
                            <div id='text'>
                                <p>"Onde estiver, seja lá como for, tenha fé, porque até no lixão nasce flor."</p>
                                <p>~Mano Brown (Racionais MCs)</p>
                            </div>
                            <div id="links" className="flex flex-row items-center gap-4 text-center justify-center ">
                                <div id='github'>
                                    <a href="https://github.com/uPadrin" target='_black'><GithubLogo size={40} weight='regular' color='white' /></a>
                                </div>
                                <div id='linkedin'>
                                    <a href="https://www.linkedin.com/in/bryan-vieira/" target='_black'><LinkedinLogo size={40} weight='regular' color='white' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='card' className='grid grid-cols-[1fr_2fr] border-solid rounded-3xl shadow-lg hover:shadow-verde bg-white
                    hover:scale-105 delay-50 duration-700 pb-2 md:pb-1'>
                        <div id='img' className='flex flex-col place-items-center justify-center ml-[10%] py-2'>
                            <img src="https://ik.imagekit.io/padrin/Pi/Carol.png?updatedAt=1706652076388" alt="" width={"200px"} />
                        </div>
                        <div className='flex flex-col w-full justify-around'>
                            <div className='flex flex-col justify-center items-center'>
                                <h2>Carolina Dias</h2>
                                <h3>Desenvolvedora Full Stack Java</h3>
                            </div>
                            <div id='text'>
                                <p>"Tudo o que temos de decidir é o que fazer com o tempo que nos é dado."</p>
                                <p>~J.R.R. Tolkien</p>
                            </div>
                            <div id="links" className="flex flex-row items-center gap-4 text-center justify-center ">
                                <div id='github'>
                                    <a href="https://github.com/carolinasdias" target='_blank'><GithubLogo size={40} weight='regular' color='white' /></a>
                                </div>
                                <div id='linkedin'>
                                    <a href="https://www.linkedin.com/in/carolinasdias/" target='_blank'><LinkedinLogo size={40} weight='regular' color='white' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='card' className='grid grid-cols-[1fr_2fr] border-solid rounded-3xl shadow-lg hover:shadow-verde bg-white
                    hover:scale-105 delay-50 duration-700 pb-2 md:pb-1'>
                        <div id='img' className='flex flex-col place-items-center justify-center ml-[10%] py-2'>
                            <img src="https://ik.imagekit.io/padrin/Pi/gabs.png?updatedAt=1706649666756" alt="" width={"200px"} />
                        </div>
                        <div className='flex flex-col w-full justify-around'>
                            <div className='flex flex-col justify-center items-center'>
                                <h2>Gabriel Rodrigues</h2>
                                <h3>Desenvolvedor Full Stack Java</h3>
                            </div>
                            <div id='text'>
                                <p >"Sempre fui sonhador, é isso que me mantém vivo!"</p>
                                <p>~Afro X</p>
                            </div>
                            <div id="links" className="flex flex-row items-center gap-4 text-center justify-center ">
                                <div id='github'>
                                    <a href="https://github.com/gabzoom" target='_blank'><GithubLogo size={40} weight='regular' color='white' /></a>
                                </div>
                                <div id='linkedin'>
                                    <a href="https://www.linkedin.com/in/gabrielrodriguesz/" target='_blank'><LinkedinLogo size={40} weight='regular' color='white' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='lastcard' className='content-center mb-10 w-[71%] xl:w-[44%] 2xl:w-[34.5%]'>
                    <div id='card' className='grid grid-cols-[1fr_2fr] border-solid rounded-3xl shadow-lg hover:shadow-verde bg-white
                    hover:scale-105 delay-50 duration-700 pb-2 md:pb-1'>
                        <div id='img' className='flex flex-col place-items-center justify-center ml-[10%] py-2'>
                            <img src="https://ik.imagekit.io/padrin/Pi/jeni.png?updatedAt=1706651820756" alt="" width={"200px"} />
                        </div>
                        <div className='flex flex-col w-full justify-around'>
                            <div className='flex flex-col justify-center items-center'>
                                <h2>Jeniffer Ribeiro</h2>
                                <h3>Desenvolvedora Full Stack Java</h3>
                            </div>
                            <div id='text'>
                                <p>"O importante não é ter muita experiência, mas ter muita sede de aprender."</p>
                                <p>~Ada Lovelace</p>
                            </div>
                            <div id="links" className="flex flex-row items-center gap-4 text-center justify-center ">
                                <div id='github'>
                                    <a href="https://github.com/jenifferribeiro" target='_blank'><GithubLogo size={40} weight='regular' color='white' /></a>
                                </div>
                                <div id='linkedin'>
                                    <a href="https://www.linkedin.com/in/ribeirojeniffer/" target='_blank'><LinkedinLogo size={40} weight='regular' color='white' /></a>
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