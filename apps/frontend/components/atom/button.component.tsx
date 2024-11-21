interface ButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    varient: 'BlackOne' | 'normal'
    iconPosition?: 'left' | 'right'
    children?: React.ReactNode
    className?: string
    buttonText: string
}

const CustomButton: React.FC<ButtonTypes> = ({
    children,
    className = '',
    varient = 'normal',
    buttonText,
    iconPosition = 'left',
}) => {
    const buttonStyle =
        varient === 'BlackOne' ? ` w-full py-3 bg-buttonBlack text-white` : varient === 'normal' ? '' : ''
    const iconPositionStyle = iconPosition === 'right' ? 'flex-row-reverse' : ''
    return (
        <button className={`${buttonStyle}${className}`}>
            <span className={`flex items-end justify-center gap-2 ${iconPositionStyle}`}>
                {children}
                <p>{buttonText}</p>
            </span>
        </button>
    )
}

export default CustomButton
