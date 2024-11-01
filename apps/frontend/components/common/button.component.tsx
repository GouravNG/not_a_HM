interface ButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    varient: 'BlackOne'
    children: React.ReactNode
    className?: string
    buttonText: string
}

const CustomButton: React.FC<ButtonTypes> = ({ children, className = '', varient, buttonText }) => {
    const buttonStyle = varient === 'BlackOne' ? ` w-full py-3 bg-buttonBlack text-white` : ``
    return (
        <button className={`${buttonStyle}${className}`}>
            <span className="flex items-end justify-center gap-2">
                {children}
                <p>{buttonText}</p>
            </span>
        </button>
    )
}

export default CustomButton
