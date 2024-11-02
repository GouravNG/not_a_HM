type ProductImageType = {
    imgSrc: string
    imgAlt: string
}

type ProductDetailsType = {
    productName: string
    productPrice: string
    productImage: ProductImageType
    productSKU: string[]
}
type ProductContainerTypes = {
    productDetail: ProductDetailsType
}

import ImageContainer from '../common/imageContainer.component'
import Favorite from '../common/favorite.component'
import ProductDescrption from '../common/productDesc.component'
import SKUColorBox from '../common/skuColorsBox.component'

const ProductContainer: React.FC<ProductContainerTypes> = ({ productDetail }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <ImageContainer
                    imgSrc={productDetail.productImage.imgSrc}
                    imgAlt={productDetail.productImage.imgAlt}
                    size="large"
                >
                    <Favorite position="top-right" />
                </ImageContainer>
                <div className="w-full">
                    <ProductDescrption
                        productName={productDetail.productName}
                        productPrice={productDetail.productPrice}
                        style="PLP"
                    />
                </div>
                <SKUColorBox skuColor={productDetail.productSKU} />
            </div>
        </>
    )
}
export default ProductContainer
