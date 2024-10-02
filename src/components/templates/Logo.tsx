import Link from "next/link"

export default function Logo() {
    return(
        <Link href="/">
            <div className="flex gap-1 items-center">
                <div className="flex gap-1">
                    <span className="h-6 w-2 bg-green-900 rounded-md p-2 m-[2px]"></span>
                    <span className="h-6 w-2 bg-green-700 rounded-md p-2 m-[2px]"></span>
                    <span className="h-6 w-6 bg-white rounded-full p-2 m-[2px]"></span>
                </div>
                <span className=" font-black">Investisse</span>
            </div>
        
        </Link>
    )
}