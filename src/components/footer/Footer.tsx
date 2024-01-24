import { EnvelopeSimple, FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, Phone } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="flex justify-center bg-verde text-bege h-48">
                <div className="columns-3 flex justify-center items-center gap-44 w-3/5">
                    <div className="flex flex-col">
                        <p className="text-xl text-left font-bold mb-1">Raízes Coletivas</p>
                        <p className="opacity-[0.6]">
                            Semeando Sustentabilidade, Colhendo Comunidade.
                        </p>
                        <ul className="flex flex-row gap-2 mt-5">
                            <li>
                                <a
                                    href="https://github.com/orgs/Projeto-Integrador-Raizes-Coletivas/repositories"
                                    target="_blank"
                                >
                                    <GithubLogo size={24} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/school/generationbrasil"
                                    target="_blank"
                                >
                                    <LinkedinLogo size={24} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/generationbrasil"
                                    target="_blank"
                                >
                                    <InstagramLogo size={24} />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/generationbrasil"
                                    target="_blank"
                                >
                                    <FacebookLogo size={24} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xl text-left font-bold mb-1 w-32">Links Úteis</p>
                        <Link to="/produtos">
                            Produtos
                        </Link>

                        <Link to="/sobre">
                            Sobre
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xl text-left font-bold mb-1">Contato</p>
                        <div className="flex flex-row gap-1">
                            <Phone size={22} />
                            <p>(11) 99999-9999</p>
                        </div>
                        <div className="flex flex-row gap-1">
                            <EnvelopeSimple size={22} />
                            <p>raizescoletiva@email.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-verde flex justify-center text-bege text-sm p-4 border-t border-[#e3ddd8] border-opacity-[0.6] border-x-none border-t-1">
                <span className="opacity-[0.8]">
                    RaízesColetivas© 2024. Todos os direitos reservados.
                </span>
            </div>
        </>
    );
}

export default Footer