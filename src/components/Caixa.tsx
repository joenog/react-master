export default function Caixa(props: any) {
    return(
        <div className={`
            flex
            p-3
            justify-center
            bg-blue-900
            border-2
            rounded-md
            ${props.className ?? ""}
            ${props.id ?? ""}
            
        `}>
        
            <span>{props.text}</span>
        </div>
    )
}