import { SkuInfoType } from '@repo/types/types'

const getDefaultSkuInfo = (defaultSkuId: string, skuinfo: SkuInfoType[]) => {
    return skuinfo.filter((i) => i.skuId === defaultSkuId)
}

export default getDefaultSkuInfo
