import { IconAdjustmentsHorizontal, IconChevronDown } from "@tabler/icons-react"
import ProductContainer from "../../../components/products/productContainer.component"
import BreadCrumbs from "../../../components/common/breadCrumbs.component"
import { Scrollable } from "../../../components/common/scrollable.component"
import Pagination from "../../../components/common/pagination.component"

export const PLP = () => {
  const breadCrumb = [
    { path: "HM.com", link: "" },
    { path: "Shirt", link: "" },
    { path: "Men", link: "" },
  ]

  const dummyData = {
    categoryName: "Shirt",
    categoryDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fugiat voluptate sint corrupti velit molestiae porro necessitatibus quibusdam, quisquam aliquid quo repudiandae erroroptio eligendi dolorem ab natus odit fugit?",
    subCategory: [
      {
        text: "PlainShirt",
        link: "",
      },
      {
        text: "UnderShirt",
        link: "",
      },
      {
        text: "Summer Shirt",
        link: "",
      },
      {
        text: "Summer Shirt",
        link: "",
      },
      {
        text: "Summer Shirt",
        link: "",
      },
    ],
  }

  return (
    <>
      <div>
        <BreadCrumbs breadCrumb={breadCrumb} />
        <div className="p-1 px-2 md:flex items-between  m-1">
          <div className="hidden md:flex  min-w-64">filters</div>
          <div className="pl-3">
            <div className="py-5">
              <div className="text-center text-2xl font-bold pb-2 md:text-start">
                {dummyData.categoryName}
              </div>
              <div className="overflow-hidden text-ellipsis max-h-[4.5rem] leading-[1.5rem] text-sm md:max-w-5xl">
                {dummyData.categoryDescription}
              </div>
            </div>
            <div className="flex gap-2 m-1 p-1 text-nowrap overflow-x-scroll pb-3 md:hidden">
              <Scrollable ScrollItems={dummyData.subCategory} />
            </div>
            <div className="p-1 pt-6">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  SortBy
                  <IconChevronDown stroke={1} />
                </div>
                <div className="flex gap-2">
                  Filter
                  <IconAdjustmentsHorizontal stroke={1} />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-1">
                <ProductContainer />
                <ProductContainer />
                <ProductContainer />
                <ProductContainer />
                <ProductContainer />
              </div>
              <div className="flex flex-col items-center justify-center gap-6 p-1">
                <p className="p-2 md:p-4 w-[22rem] md:w-[26rem] text-center text-lg font-bold bg-gray-950 text-white">
                  Load Next Page
                </p>
                <div className="flex md:items-center justify-center">
                  <Pagination />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <p>Trending right now</p>
              <p className=" border border-black p-2 font-semibold">
                Red Shirts for Men
              </p>
              <p className="text-sm">Show More</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PLP
