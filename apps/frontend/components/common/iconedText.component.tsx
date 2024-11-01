type TextWithIconType = {
    children: React.ReactNode
    text: string
    className?: string
    position?: 'left' | 'right' | 'center'
}
const TextWithIcon: React.FC<TextWithIconType> = ({ text, children, className, position = 'left' }) => {
    const positionStyle =
        position === 'left' ? 'justify-start' : position === 'right' ? 'justify-end' : 'justify-center'

    return (
        <span className={`flex items-end gap-2 ${positionStyle} ${className}`}>
            {children}
            <p>{text}</p>
        </span>
    )
}
export default TextWithIcon
