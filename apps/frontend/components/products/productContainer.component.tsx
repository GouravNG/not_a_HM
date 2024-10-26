import { IconHeart } from "@tabler/icons-react"
import Image from "next/image"

const ProductContainer = () => {
  return (
    <>
      <div className="py-3 relative w-full flex flex-col items-start justify-start">
        <div className="flex items-start justify-end">
          <Image src={"/shirt.jpg"} alt="shirt" height={100} width={180} className="md:w-[400]" />
          <div className="absolute float-right p-1">
            <IconHeart stroke={.5} color="black" fill="white"/>
          </div>
        </div>
        <div className="py-1">
          <p className="text-sm font-semibold">Loose Fit Shirt</p>
          <p className="text-sm">Rs.1499.00</p>
          <div className="flex gap-1 mt-1 items-center">
            <div className="border bg-red-400 border-black w-2 h-2 p-1"></div>
            <div className="border bg-red-400 border-black w-2 h-2 p-1"></div>
            <div className="border bg-red-400 border-black w-2 h-2 p-1"></div>
            <p className="text-sm">+2</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductContainer
