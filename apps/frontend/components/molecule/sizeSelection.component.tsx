'use client'
import useCheckoutStore from '@/stores/checkout.store'
type SelectSizeTypes = {
    SKUSizeList: string[]
}

const SelectSize: React.FC<SelectSizeTypes> = ({ SKUSizeList }) => {
    const { setSize, size } = useCheckoutStore()
    const handleSizeSelection = (selectedSize: string) => {
        setSize(selectedSize)
    }
    return (
        <>
            <p className="text-sm w-full pb-2">Sizes</p>
            <div className="grid grid-cols-5 gap-4 justify-evenly items-center w-full ">
                {SKUSizeList.map((i, index) => {
                    return (
                        <div
                            className={`flex text-sm py-3 border border-gray-500 w-full items-center justify-center ${size === i && 'bg-buttonBlack text-white'}`}
                            key={index}
                            onClick={() => handleSizeSelection(i)}
                        >
                            {i}
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default SelectSize
