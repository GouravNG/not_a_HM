import { ProductDataType } from '@repo/types/types'
import getDefaultSkuInfo from '@/utils/getDefaultSku'
import getRedirectLink from '@/utils/getRedirectLink'
import Favorite from '../atom/favorite.component'
import ImageContainer from '../molecule/imageContainer.component'
import ProductDescrption from '../molecule/productDesc.component'
import SKUColorBox from '../molecule/skuColorsBox.component'

type ProductContainerTypes = {
    productDetail: ProductDataType
}
const ProductContainer: React.FC<ProductContainerTypes> = ({ productDetail }) => {
    const defaultSkuInfo = getDefaultSkuInfo(productDetail.defaultSkuId, productDetail.skuInfo)
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <a href={getRedirectLink(`/test/product/${productDetail.id}`)} title={productDetail.name}>
                    <ImageContainer
                        imgSrc={defaultSkuInfo[0]?.images.mainImageSrc ?? ''}
                        imgAlt={productDetail.name}
                        size="large"
                    >
                        <Favorite position="top-right" />
                    </ImageContainer>
                </a>
                <div className="w-full">
                    <ProductDescrption
                        productName={productDetail.name}
                        productPrice={defaultSkuInfo[0]!.skuPrice.salePrice}
                        style="PLP"
                    />
                </div>
                <SKUColorBox skuColor={productDetail.colorCodes} />
            </div>
        </>
    )
}
export default ProductContainer
