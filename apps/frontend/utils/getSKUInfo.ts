import { ProductDataType } from '@repo/types/types'

export const getSKUInfo = (productData: ProductDataType, SKUId: string = productData.defaultSkuId) => {
    return productData.skuInfo.filter((skuInfo) => {
        return skuInfo.skuId === SKUId
    })[0]
}
