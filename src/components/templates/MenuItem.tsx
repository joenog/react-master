import Link from "next/link";

export default function MenuItem(props: any) {
    
    return(
        <Link href={props.link} className="flex gap-2 items-center  hover:bg-green-950 rounded-md px-4 py-2 transition-all">
            {props.children}
        </Link>

    )
}