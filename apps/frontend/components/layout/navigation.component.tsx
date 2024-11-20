import { makeGetRequest } from '@/utils/httpRequest'
import type { MainCateogryTypes } from '@repo/types/types'
const Navigation = async () => {
    const mainCategory: { categories: MainCateogryTypes } = await makeGetRequest('/getAllMainCategories')
    const categoryData: any = await Promise.all(
        //TODO: Fix any
        mainCategory?.categories.map(async (key) => {
            return await makeGetRequest(`/getAllMerchData/${key}`)
        }),
    )

    return (
        <nav className="hidden md:block md:mt-4 w-full relative">
            <ul className="flex items-center justify-around w-full">
                {mainCategory?.categories.map((mainCategory, index) => {
                    const subCategoryData = categoryData[index]
                    const subCategoryHeading = Object.keys(subCategoryData)
                    return (
                        <li key={index} className="group">
                            {mainCategory}
                            <ul className="hidden group-hover:grid grid-cols-4 absolute bg-white items-start justify-start p-2">
                                {subCategoryHeading.map((subCategoryHeading, index) => {
                                    return (
                                        <li key={index} className="py-1 flex flex-col gap-2 items-start justify-center">
                                            <b>{subCategoryHeading}</b>
                                            <ul className="text-sm">
                                                {subCategoryData[subCategoryHeading]?.map(
                                                    (subCategory: any, index: number) => {
                                                        return <li key={index}>{subCategory}</li>
                                                    },
                                                )}
                                            </ul>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navigation
