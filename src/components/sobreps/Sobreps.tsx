import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react"


function Sobreps() {
    return (
        <div id="container" className=" flex flex-row border-solid rounded-3xl bg-white gap-2 py-4">
            
            <div id="img" className=" flex flex-col place-items-center justify-center basis-1/2 ">
                <img src="https://ik.imagekit.io/padrin/711769.png?updatedAt=1705680795717" alt="" width={"200"} />
                <h1 className="text-4xl font-semibold text-center">Bryan</h1>
            </div>
            <div id="links" className="flex items-center  gap-4 text-center">
                <div>
                    <GithubLogo size={100} weight='bold' />
                    <p className="font-bold">GitHub</p>
                </div>
                <div>
                    <LinkedinLogo size={100} weight='bold' />
                    <p className="font-bold">Linkedin</p>
                </div>
            </div>
        </div>
    )
}

export default Sobreps