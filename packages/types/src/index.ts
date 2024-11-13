//category types
export type MainCateogryTypes = string[]

type CategorySection = string[]

type Category = {
    [section: string]: CategorySection
}

export type SubCategoryTypes = {
    [category: string]: Category
}

//product types

type SkuPriceType = {
    retailPrice: number
    salePrice: number
    memberPrice?: number
}

type SkuImagestype = {
    mainImageSrc: string
    altImages: string[]
}

export type SkuInfoType = {
    skuId: string
    skuColorName: string
    skuFit: number
    sizes: string[]
    skuPrice: SkuPriceType
    images: SkuImagestype
}

export type ProductDataType = {
    id: string
    name: string
    parentCategory: string
    defaultSkuId: string
    colorCodes: string[]
    skuInfo: SkuInfoType[]
}

export type PaginatedDataTypes = {
    page: { page: string; size: string; count: number }
    paginatedData: ProductDataType[]
}
