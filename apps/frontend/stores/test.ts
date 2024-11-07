type PricingTypes = {
    currency: 'Rs'
    retail_price: number
    offer_price: number
    member_price: number
}

type SKUSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'

type SKUType = {
    sku_id: number
    sku_name: string
    sku_img: string
    sku_price: {
        [size in SKUSizes]: PricingTypes
    }
}

type CatalogType = {
    product_id: number
    product: string
    product_description?: string
    sku_colors?: string[]
    sku_info: SKUType[]
}

type SubCategoryType = {
    category: string
    category_description?: string
    product_id: number
}

type MainCategoryType = {
    category: string
    category_description?: string
    subCategory: SubCategoryType
}
