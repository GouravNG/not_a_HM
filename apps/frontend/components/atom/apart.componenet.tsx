type ApartTextType = {
    left: string
    right: string
    className?: string
    left_ClassName?: string
    right_ClassName?: string
}
const ApartText: React.FC<ApartTextType> = ({
    left,
    right,
    className = '',
    left_ClassName = '',
    right_ClassName = '',
}) => {
    return (
        <div className={`flex items-center justify-between ${className}`}>
            <p className={`${left_ClassName}`}>{left}</p>
            <p className={`${right_ClassName}`}>{right}</p>
        </div>
    )
}
export default ApartText
