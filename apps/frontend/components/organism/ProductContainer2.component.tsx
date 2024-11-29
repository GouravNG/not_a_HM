import { CartType } from '@repo/types/types'
import ImageContainer from '../molecule/imageContainer.component'

type ProductBoxType = {
    itemInfo: CartType
}
const ProductBox: React.FC<ProductBoxType> = ({ itemInfo }) => {
    return (
        <div className="flex items-start justify-around py-2 border-b-[1px] border-gray-300">
            <div>
                <ImageContainer imgAlt={itemInfo.name} imgSrc={itemInfo.image} scale={90} />
            </div>
            <div>
                <p>{itemInfo.name}</p>
                <p>Rs.{itemInfo.price}.00</p>
                <div className=" flex gap-2 text-sm text-gray-600">
                    <div>
                        <p>Quanity</p>
                        <p>Colour</p>
                        <p>Size</p>
                    </div>
                    <div>
                        <p>{itemInfo.quantity}</p>
                        <p>{itemInfo.skuColorName}</p>
                        <p>{itemInfo.size}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductBox
