type ProductDescrptionTypes = {
    productName: string
    productPrice: string
    className?: string
    style?: 'PDP' | 'PLP'
}

export const ProductDescrption: React.FC<ProductDescrptionTypes> = ({
    productName,
    productPrice,
    className,
    style = 'PDP',
}) => {
    const baseStyle = 'font-extrabold'
    const CustomStyleForProductName = style === 'PLP' ? 'truncate pt-2' : ' pb-2'
    const CustomStyleForPrice = style === 'PLP' ? 'text-sm' : ''
    return (
        <>
            <div className={className}>
                <p className={`${baseStyle} ${CustomStyleForProductName}`}>{productName}</p>
                <p className={style === 'PDP' ? 'text-fontGray text-sm' : 'hidden'}>MRP inclusive of all taxes</p>
                <p className={`${CustomStyleForPrice}`}>Rs. {productPrice}</p>
            </div>
        </>
    )
}

export default ProductDescrption
