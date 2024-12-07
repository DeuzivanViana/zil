export const Button = ({type, className, value, onClick}) => {
    return <button type={type} className={`p-3 text-neutral-50 bg-black rounded-xl ${className}`} onClick={onClick}>
        { value }
    </button>
}