//category types
export type MainCateogryTypes = string[]

type CategorySection = string[]

type Category = {
    [section: string]: CategorySection
}

export type SubCategoryTypes = {
    [category: string]: Category
}
