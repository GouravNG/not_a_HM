interface ButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    varient: 'BlackOne' | 'normal' | 'secondary-black'
    iconPosition?: 'left' | 'right'
    children?: React.ReactNode
    className?: string
    buttonText: string
    handleclickFn?: () => void
}

const CustomButton: React.FC<ButtonTypes> = ({
    children,
    className = '',
    varient = 'normal',
    buttonText,
    iconPosition = 'left',
    handleclickFn,
}) => {
    let buttonStyle = ''
    switch (varient) {
        case 'BlackOne':
            buttonStyle = 'w-full py-3 bg-buttonBlack text-white'
            break
        case 'normal':
            buttonStyle = ''
            break
        case 'secondary-black':
            buttonStyle = 'w-full py-3 border border-black text-black'
    }
    const iconPositionStyle = iconPosition === 'right' ? 'flex-row-reverse' : ''
    return (
        <button className={`${buttonStyle}${className}`} onClick={handleclickFn}>
            <span className={`flex items-end justify-center gap-2 ${iconPositionStyle}`}>
                {children}
                <p>{buttonText}</p>
            </span>
        </button>
    )
}

export default CustomButton
