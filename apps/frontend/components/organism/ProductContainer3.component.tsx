import ApartText from '@/components/atom/apart.componenet'
import { CartType } from '@repo/types/types'
import { IconTrash } from '@tabler/icons-react'
import Image from 'next/image'

type ProductContainer3Type = {
    cartitem: CartType
}

const ProductContainer3: React.FC<ProductContainer3Type> = ({ cartitem }) => {
    return (
        <div className="w-full p-2 ">
            <div className="w-full flex gap-2 p-2">
                <div className=" p-1">
                    <Image src={cartitem.image} alt={cartitem.name} width={160} height={1} />
                </div>
                <div className="flex items-start justify-between w-full p-2 ">
                    <div className="flex flex-col gap-2 justify-center items-start w-full  p-1">
                        <div className=" w-full">
                            <b>{cartitem.name}</b>
                            <p>Rs.{cartitem.price}.00</p>
                        </div>
                        <div className="w-52 p-1 text-nowrap">
                            {/* FIX ALIGNMENT ISSUE  */}
                            <div className="md:flex w-full items-center justify-between gap-10">
                                <ApartText
                                    left="Quantity"
                                    right={cartitem.quantity.toString()}
                                    className="text-sm w-full"
                                />
                                <ApartText left="Size" right={cartitem.size} className="text-sm w-full" />
                            </div>
                            <div className="md:flex w-full items-center justify-between gap-10">
                                <ApartText left="Color" right={cartitem.skuColorName} className="text-sm w-full" />
                                <ApartText
                                    left="Total"
                                    right={(cartitem.quantity * cartitem.price).toString()}
                                    className="text-sm w-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <IconTrash stroke={0.8} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductContainer3
