import Link from "next/link";
import Title from "@/components/templates/Title";
import Pagina from "@/components/templates/Pagina";
import { IconAnalyze } from "@tabler/icons-react";

export default function Page() {
  return (
      <Pagina>
        <div className=" flex flex-col items-center justify-center w-full h-96">
          <IconAnalyze  size={100} stroke={0.6}/>
          <div className="flex flex-col items-center">
          <Title>Bem vindo ao Investisse</Title>
            <h1 className="text-zinc-500">A melhor forma de prever seus investimentos!</h1>
          </div>
        </div>
      </Pagina>
  );
}
