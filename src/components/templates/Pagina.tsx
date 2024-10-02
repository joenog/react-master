/*Este é o componente pagina principal, é a atrutura que engloba tudo do app, menus icons tudo dentro dele será váriavel */

import Cabecalho from "./Cabecalho"
import MenuPrincinpal from "./MenuPrincipal"
import Rodape from "./Rodape"

export default function Pagina(props: any) {
    return (
        <div className="flex flex-col h-screen">
            <Cabecalho/>
            <div className="flex flex-grow ">
                <MenuPrincinpal/>
                <div className="flex flex-col flex-1">
                    <main className="p-7 flex-1">
                        {props.children}
                    </main>

                    <Rodape/>
                </div>
            </div>
        </div>
    )
}
