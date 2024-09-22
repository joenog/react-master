import Logo from "./Logo"
import MenuUser from "./MenuUser"

export default function Cabecalho() {
    return(
        <header className="flex items-center p-5 gap-5 bg-zinc-900 h-[78px]" >
            <Logo/>
            <span className="flex-grow">Cabecalho</span>
            <MenuUser/>
        </header>
    )
}