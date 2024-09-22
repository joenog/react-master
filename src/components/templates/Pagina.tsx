import Cabecalho from "./Cabecalho"
import Caixa from "../Caixa"
import MenuPrincinpal from "./MenuPrincipal"

export default function Pagina() {
    return (
        <div className="flex flex-col h-screen">
            <Cabecalho/>
            <div className="flex flex-grow">
                <MenuPrincinpal/>
                <main>
                    <Caixa/>
                </main>
            </div>
        </div>
    )
}