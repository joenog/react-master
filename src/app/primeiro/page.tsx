import Pagina from "@/components/templates/Pagina";

{/* O componente em React é uma função, e como uma função em JavaScript, ele pode ter outras funções internas.
   Além disso, dentro dessa função, é possível criar outras estruturas e lógica de controle. */

   /* Também é possivel criar elementos HTML dentro de contantes JSX */
}

export default function Primeiro() {

    function anoAtual(){
        return new Date().getFullYear();
    };

    function gerarLista() {
        return(
            <ul className="pl-10 list-disc">
                <li>Maria</li>
                <li>Pedro</li>
            </ul>
        )
    }

    const titulo = <div>
        <h1>Titulo</h1>
        <h2>Sub-titulo</h2>
    </div>

    const raio = 4.5;
    const PI = 3.14159;

    return (
        <Pagina>

            <div>
                <h1>Primeiro componente</h1>

                <div className="flex flex-col">
                    <span>{1+1}</span>
                    <span>{Math.random()*100}</span>
                    <span>{anoAtual()}</span>
                </div>
                    <span>{gerarLista()}</span>
                    <span>{PI * Math.pow(raio, 2)}</span>
                    {titulo}
            </div>
        </Pagina>
    )
}