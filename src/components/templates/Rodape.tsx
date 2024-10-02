import { IconHeart, IconHeartFilled } from "@tabler/icons-react"

export default function Rodape() {
    return(
        <footer>
            <div className="flex justify-end  p-4 bg-zinc-900 text-sm text-zinc-600">
                <span>Desenvolvido com </span> < IconHeartFilled className="text-red-800"/>
                <span>joe.dev - {new Date().getFullYear()}</span>
            
            </div>
        </footer>
         )
}