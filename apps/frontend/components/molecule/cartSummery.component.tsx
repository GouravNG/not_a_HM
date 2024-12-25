import { CartType } from '@repo/types/types'
import ApartText from '../atom/apart.componenet'
import CustomButton from '../atom/button.component'

type CartSummeryProps = {
    cartData: CartType[]
}

const CartSummery: React.FC<CartSummeryProps> = ({ cartData }) => {
    const getOrderValue = () => {
        const sumWithInitial = cartData.reduce((total, item) => {
            return total + item.price * item.quantity
        }, 0)
        return sumWithInitial ?? 0
    }
    const getDeliveryCharge = () => {
        const orderPrice = getOrderValue()
        if (orderPrice > 1000) return 250
        return 0
    }
    const getTotalValue = () => {
        return getOrderValue() + getDeliveryCharge()
    }
    return (
        <div className=" w-full md:w-[33%] bg-white p-4">
            <div className="p-2 text-sm">
                <div className="w-full flex items-center justify-between py-1">
                    <p className="text-gray-500">Discount</p>
                    <p>Apply Discount</p>
                </div>
                <p className="py-2">Sign in to use your personal offer!!</p>
                <div className="py-1 border-b-[1px] border-gray-500 text-lg font-bold pb-4">
                    <CustomButton varient="secondary-black" buttonText="Sign In" />
                </div>
                <div className="pt-4 flex flex-col gap-2">
                    <ApartText left="Order value" right={`Rs.${getOrderValue()}`} />
                    <ApartText left="Delivery" right={`Rs.${getDeliveryCharge()}`} />
                    <div className="border-b-[1px] border-gray-500" />
                    <ApartText left="Total" right={`Rs.${getTotalValue()}`} className="font-bold text-lg" />
                </div>
                <div className="py-10 border-b-[1px] border-gray-500 font-bold text-lg hidden md:block">
                    <CustomButton varient="BlackOne" buttonText="Continue to Checkout" />
                </div>
            </div>
        </div>
    )
}
export default CartSummery
