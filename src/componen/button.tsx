
interface ButtonProps {
    type: "button" | "submit" | "reset" | undefined,
    className?: string
    children: React.ReactNode
}
const Button: React.FC<ButtonProps> = ({ type, className, children }) => {
    return (
        <button
            type={type || "button"}
            data-ripple-light="true"
            className={`align-middle ${className}
                select-none font-sans
                 font-bold text-center
                  uppercase transition-all 
                  disabled:opacity-50 disabled:shadow-none
                   disabled:pointer-events-none text-xs
                    py-3 px-9 rounded-md   shadow-md
                     shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85]
                      focus:shadow-none active:opacity-[0.85] active:shadow-none`}
        >
            {children}
        </button>
    )
}

export default Button
