
import MenuItem from "../MenuItem"

export default function MenuPrincinpal() {

    return(
        <div>
            <aside className="w-80 h-screen p-5 pag-3 bg-zinc-900">
                <nav className=" flex flex-col">
                    <MenuItem text="Primeiro Componente" link="/primeiro"/>
                    <MenuItem text="Flexbox" link="/flexbox"/>   
                    <MenuItem text="Componente Página" link="/pagina"/> 

                    {
                    //<Link className="hover:bg-green-950 px-4 py-2 transition-all rounded-md"  href="/primeiro">Primeiro componente</Link>
                    //<Link className="hover:bg-green-950 px-4 py-2 transition-all rounded-md" href="/flexbox">Flexbox</Link>
                    //<Link className="hover:bg-green-950 px-4 py-2 transition-all rounded-md" href="/pagina">COmponente Pagina</Link>
                    }
                </nav>
            </aside>
        </div>
    )
}