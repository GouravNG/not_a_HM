type SKUColorTypes = {
    skuColor: string[]
}
const SKUColorBox: React.FC<SKUColorTypes> = ({ skuColor }) => {
    return (
        <div className="w-full flex gap-1 py-3 items-center">
            {skuColor.slice(0, 3).map((color, index) => {
                return <div key={index} className={`w-2 h-2 border border-black p-1 bg-[${color}] `} />
            })}
            {skuColor.length > 3 && <p className="text-sm">{skuColor.length - 3}+</p>}
        </div>
    )
}
export default SKUColorBox
