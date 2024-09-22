import Link from "next/link";

export default function Page() {
  return (
    <div 
      className="
        bg-red-500
        min-h-screen
        
      ">
      <h1 className="font-black">Temporário</h1>
      <nav className=" flex flex-col">
        <Link href="/primeiro">Primeiro componente</Link>
        <Link href="/flexbox">Flexbox</Link>
        <Link href="/pagina">COmponente Pagina</Link>
      </nav>
    </div>
  );
}
