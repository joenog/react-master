import Caixa from "@/components/Caixa"

export default function Page() {
    return(
        <div className="h-screen">
            <h1 className="text-4xl">FlexBOX</h1>

            <div className="
                    h-full
                    flex
                    bg-neutral-700
                    justify-around
                    items-start
                    gap-3
                ">

                <Caixa text="Texto1" className="w-28"/> 
                <Caixa text="Texto2" className="flex-grow"/>
                <Caixa text="Text in props" className="w-20"/>
            </div>
        </div>
    )
}