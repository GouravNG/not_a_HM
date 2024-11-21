type ProductDescrptionTypes = {
    productName: string
    productPrice: number
    className?: string
    style?: 'PDP' | 'PLP'
    memberPrice?: number
}

export const ProductDescrption: React.FC<ProductDescrptionTypes> = ({
    productName,
    productPrice,
    style = 'PDP',
    memberPrice,
}) => {
    const baseStyle = 'font-extrabold'
    const CustomStyleForProductName = style === 'PLP' ? 'truncate pt-2' : ' pb-2'
    const CustomStyleForPrice = style === 'PLP' ? 'text-lg' : ''
    return (
        <>
            <div className="flex items-end justify-between px-1">
                <div>
                    <p className={`${baseStyle} ${CustomStyleForProductName}`}>{productName}</p>
                    <p className={style === 'PDP' ? 'text-fontGray text-sm' : 'hidden'}>MRP inclusive of all taxes</p>
                    <p className={`${CustomStyleForPrice}`}>Rs. {productPrice}</p>
                </div>
                <div>
                    {memberPrice && (
                        <p className="bg-hmMemberPriceColor m-1 px-4 font-thin">Member price Rs :{memberPrice}.00</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProductDescrption
