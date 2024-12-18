import { IconAdjustmentsHorizontal, IconPlus } from '@tabler/icons-react'
import { makeGetRequest } from '@/utils/httpRequest'
import { PaginatedDataTypes } from '@repo/types/types'
import BreadCrumbs from '@/components/atom/breadCrumbs.component'
import CustomButton from '@/components/atom/button.component'
import CategoryDescription from '@/components/atom/categoryDescription.component'
import ScrollableConatainer from '@/components/atom/scrollableContainer.component'
import SubCategory from '@/components/atom/subCategory.component'
import AsideCategory from '@/components/molecule/asideCategory.component'
import Pagination from '@/components/molecule/pagination.component'
import TrendingCategories from '@/components/molecule/trending.component'
import ProductContainer from '@/components/organism/productContainer.component'
import { breadCrumb, dummyData } from '@/dummyData'

const PLP = async ({ searchParams }: { params: unknown; searchParams: { page: string; size: string } }) => {
    const products: PaginatedDataTypes = await makeGetRequest(
        `/getAllProducts?page=${searchParams.page ?? 1}&size=${searchParams.size ?? 12}`,
    )
    return (
        <div className="px-4 md:px-0">
            <BreadCrumbs breadCrumb={breadCrumb} />
            <div className="md:flex items-between md:px-6">
                <AsideCategory />
                <main className="md:w-10/12">
                    <CategoryDescription
                        categoryName={dummyData.categoryName}
                        categoryDescription={dummyData.categoryDescription}
                    />
                    <ScrollableConatainer className="py-4 md:hidden">
                        <SubCategory ScrollItems={dummyData.subCategory} className="make-it-scroll " />
                    </ScrollableConatainer>
                    <div className="pt-6">
                        <div className="flex items-center justify-between">
                            <CustomButton varient="normal" buttonText="Sort by" className="p-1" iconPosition="right">
                                <IconPlus stroke={1} />
                            </CustomButton>
                            <CustomButton varient="normal" buttonText="Filter" className="p-1" iconPosition="right">
                                <IconAdjustmentsHorizontal stroke={1} />
                            </CustomButton>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-1 pb-20">
                            {products?.paginatedData.map((productData, index) => {
                                return <ProductContainer productDetail={productData} key={index} />
                            })}
                        </div>
                        <div className="w-full md:flex items-end justify-center">
                            <div className="flex flex-col gap-4 md:w-[24rem]">
                                <CustomButton varient="BlackOne" buttonText="Load Next Page" />
                                <Pagination totalPages={7} />
                            </div>
                        </div>
                        <div className="w-full flex items-end justify-center">
                            <div className="w-[50rem]">
                                <TrendingCategories />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default PLP
