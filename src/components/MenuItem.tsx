import Link from "next/link";

export default function MenuItem(props: any) {
    
    return(
        <Link href={props.link} className="hover:bg-green-950 rounded-md px-4 py-2 transition-all">
            {props.text}
        </Link>

    )
}