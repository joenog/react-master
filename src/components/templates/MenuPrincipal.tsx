
import { Icon360, IconApps, IconConeFilled, IconHome, IconHome2, IconIceCream, IconInvoice, IconLayout2 } from "@tabler/icons-react"
import MenuItem from "./MenuItem"

export default function MenuPrincinpal() {

    return(
        <div>
            <aside className="w-80 h-screen p-5 pag-3 bg-zinc-900">
                <nav className=" flex flex-col">
                    <MenuItem  link="/primeiro">
                        <IconHome2/>
                         <span>Primeiro Componente</span>
                    </MenuItem>

                    <MenuItem link="/flexbox">
                        <IconLayout2/>
                        <span>Flexbox</span>
                    </MenuItem>

                    <MenuItem link="/pagina">
                        <IconApps/>
                        <span>Componente Pagina</span>
                    </MenuItem> 

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