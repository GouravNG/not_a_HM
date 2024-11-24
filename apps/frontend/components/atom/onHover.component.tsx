type HoverType = {
    children: React.ReactNode
    HoverComponenet: React.ReactNode
    varient?: 'left' | 'right'
}
const Hover: React.FC<HoverType> = ({ children, HoverComponenet, varient = 'right' }) => {
    const positionStyle = varient === 'left' ? 'top-12 right-0' : ''
    return (
        <>
            <div className="group relative cursor-pointer">
                <div>{children}</div>
                <div className={`hidden group-hover:block absolute ${positionStyle} bg-white`}>{HoverComponenet}</div>
            </div>
        </>
    )
}

export default Hover
