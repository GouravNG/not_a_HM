type SelectSizeTypes = {
    SKUSizeList: string[]
}

const SelectSize: React.FC<SelectSizeTypes> = ({ SKUSizeList }) => {
    return (
        <>
            <p className="text-sm w-full pb-2">Sizes</p>
            <div className="grid grid-cols-5 gap-4 justify-evenly items-center w-full ">
                {SKUSizeList.map((i, index) => {
                    return (
                        <div
                            className="flex text-sm py-3 border border-gray-500 w-full items-center justify-center"
                            key={index}
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
