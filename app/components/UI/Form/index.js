export const Form = ({onSubmit, className, children}) => {
    return (
        <form onSubmit={onSubmit} className={`gap-6 flex flex-col mt-16 bg-neutral-900 p-8 rounded-xl max-w-[400px] m-auto ${className}`}>
            { children }
        </form>
    )
}