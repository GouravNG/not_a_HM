import {
  IconBuildingStore,
  IconChevronDown,
  IconInfoCircle,
  IconScale,
  IconShoppingBag,
  IconStar,
  IconStarHalfFilled,
} from "@tabler/icons-react"
import Image from "next/image"

const PDP = () => {
  return (
    <div className="">
      <div className="text-[.7rem] text-center p-4">
        HM.com / Men / Jeans / Baggy&Loose / Loose Jeans
      </div>
      <div className="md:flex flex-row-reverse justify-between w-full">
        <div className="md:hidden flex items-center justify-center">
          <Image src={"/shirt.jpg"} alt="test" width={420} height={90} />
        </div>
        <div className="p-2 pt-6  border border-black md:w-1/3">
          <div className="p-2">
            <p className="font-bold">Loose Jeans</p>
            <p className="text-gray-500 text-sm">MRP inclusive of all taxes</p>
            <p>Rs.2,299.00</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-center text-sm">Light denim blue</p>
            <div className="flex gap-2 items-center justify-evenly">
              <div className="border border-black p-1">
                <Image src={"/shirt.jpg"} alt="test" width={50} height={50} />
              </div>
              <div className=" p-1">
                <Image src={"/shirt.jpg"} alt="test" width={50} height={50} />
              </div>
              <div className=" p-1">
                <Image src={"/shirt.jpg"} alt="test" width={50} height={50} />
              </div>
              <div className=" p-1">
                <Image src={"/shirt.jpg"} alt="test" width={50} height={50} />
              </div>
              <div className=" p-1">
                <Image src={"/shirt.jpg"} alt="test" width={50} height={50} />
              </div>
              <div className=" p-1">
                <Image src={"/shirt.jpg"} alt="test" width={50} height={50} />
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <p className="text-sm pl-3">Sizes</p>
            <div className="flex gap-2 flex-wrap justify-between items-center p-2">
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
              <div className="text-sm py-2 m-1 px-4 border border-gray-400">
                28/30
              </div>
            </div>
          </div>
          <div className="text-sm p-4">
            <p className="flex gap-2 items-center underline p-2">
              <IconScale scale={2} stroke={1} />
              Size Guide
            </p>
            <div className="border border-black p-1 m-1 mx-4 py-3 text-white bg-black text-center flex items-center justify-center gap-1">
              <IconShoppingBag scale={2} stroke={1} />
              Add Button
            </div>
          </div>
          <div className="p-1 flex flex-col gap-1 text-sm">
            <div className="flex items-center gap-1">
              <IconBuildingStore scale={2} stroke={1} />
              <p className="text-sm">Find in store</p>
            </div>
            <div className="flex gap-1 items-center">
              <IconInfoCircle scale={2} stroke={1} />
              <p className="text-sm">Delivery Time : 2-7 days</p>
            </div>
          </div>
          <div>
            <p className="font-bold p-1 text-sm pb-12">Delivery and Payment</p>
            <div className="flex gap-1 py-1">
              <IconStar scale={1} stroke={1} fill="true" />
              <IconStar scale={1} stroke={1} fill="true" />
              <IconStar scale={1} stroke={1} fill="true" />
              <IconStar scale={1} stroke={1} fill="true" />
              <IconStarHalfFilled />
              (2364 Reviews)
            </div>
          </div>
          <div className="border border-black py-8 my-1 mb-12">Size Cart</div>
          <div className="flex flex-col">
            <p className="py-2 border-t-2 text-sm border-gray-300">
              <span className="flex items-center justify-between p-1 font-semibold">
                DropDown <IconChevronDown />
              </span>
            </p>
            <p className="py-2 border-t-2 text-sm border-gray-300">
              <span className="flex items-center justify-between p-1 font-semibold">
                DropDown <IconChevronDown />
              </span>
            </p>
            <p className="py-2 border-t-2 text-sm border-gray-300">
              <span className="flex items-center justify-between p-1 font-semibold">
                DropDown <IconChevronDown />
              </span>
            </p>
          </div>
        </div>
        <div className="md:flex flex-wrap items-center border border-black md:w-2/3">
          <div className="flex items-end justify-center">
            <Image src={"/shirt.jpg"} alt="test" width={400} height={90} />
          </div>
          <div className="flex items-end justify-center">
            <Image src={"/shirt.jpg"} alt="test" width={400} height={90} />
          </div>
          <div className="flex items-end justify-center">
            <Image src={"/shirt.jpg"} alt="test" width={400} height={90} />
          </div>
          <div className="flex items-end justify-center">
            <Image src={"/shirt.jpg"} alt="test" width={400} height={90} />
          </div>
        </div>
      </div>
      <div>{/* style with and others alos bought part */}</div>
    </div>
  )
}
export default PDP
