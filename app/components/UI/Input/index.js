export const Input = ({type, name, placeholder, className}) => {
    return (
        <input type={type} name={name} placeholder={placeholder} className={`placeholder-neutral-500 bg-neutral-800 text-neutral-50 border border-neutral-600 p-3 text-sm rounded-xl outline-none ${className}`}/>
    )
}