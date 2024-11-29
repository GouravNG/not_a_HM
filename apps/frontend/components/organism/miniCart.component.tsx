'use client'
import ApartText from '../atom/apart.componenet'
import ProductBox from './ProductContainer2.component'
import CustomButton from '../atom/button.component'
import { useGetCart } from '@/hooks/useCart'
import { CartType } from '@repo/types/types'

const MiniCart = () => {
    const { data, status } = useGetCart<CartType[]>()
    const getOrderValue = () => {
        const sumWithInitial = data?.reduce((total, item) => {
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

    if (status === 'pending') return <h1>Loading...</h1>
    if (status === 'error') console.log('Something went wrong!!')
    if (status === 'success' && data === undefined) return <h1>Something went wrong</h1>
    if (status === 'success' && data !== undefined)
        return (
            <div className="flex flex-col w-96 p-4 shadow-lg">
                {!data.length ? (
                    <p className="py-6 text-sm border-b-2">Your Shopping bag is empty</p>
                ) : (
                    <div>
                        {data.map((i, index) => {
                            return <ProductBox key={index} itemInfo={i} />
                        })}
                    </div>
                )}
                <div className="border-b-2">
                    <ApartText
                        left_ClassName="text-gray-500"
                        left="Order Value"
                        right={`Rs.${getOrderValue()}.00`}
                        className="font-bold py-2"
                    />
                    <ApartText
                        left_ClassName="text-gray-500"
                        left="Delivery"
                        right={`Rs.${getDeliveryCharge()}.00`}
                        className="font-bold py-2"
                    />
                </div>
                <ApartText left="Total" right={`Rs.${getTotalValue()}.00`} className="text-lg font-bold py-2" />
                {!!data.length && (
                    <div className="flex flex-col gap-2 pt-2">
                        <CustomButton buttonText="Checkout" varient="BlackOne" />
                        <CustomButton buttonText="Shopping bag" varient="secondary-black" />
                    </div>
                )}
            </div>
        )
}
export default MiniCart
