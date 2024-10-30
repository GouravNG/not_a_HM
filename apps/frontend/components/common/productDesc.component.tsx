type ProductDescrptionTypes = {
    productName: string
    productPrice: string
    className?: string
}

export const ProductDescrption: React.FC<ProductDescrptionTypes> = ({ productName, productPrice, className }) => {
    return (
        <>
            <div className={className}>
                <p className="font-extrabold pb-2">{productName}</p>
                <p className="text-fontGray text-sm">MRP inclusive of all taxes</p>
                <p>{productPrice}</p>
            </div>
        </>
    )
}

export default ProductDescrption
