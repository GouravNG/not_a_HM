import { makeGetRequest } from '@/utils/httpRequest'
import BreadCrumbs from '../atom/breadCrumbs.component'
import CustomButton from '../atom/button.component'
import { CartType } from '@repo/types/types'
import CartItems from '../organism/cartItems.component'
import CartSummery from '../molecule/cartSummery.component'
import { apiGetCart } from '@/hooks/api'

const CartComponent = async () => {
    const cartData: CartType[] = await makeGetRequest(apiGetCart(),'no-cache')
    return (
        <div className="bg-hmBackgroundColor p-1">
            <CustomButton
                varient="BlackOne"
                buttonText="Continue to checkout"
                className="p-4 pt-4 border-b-[1px] border-gray-500 md:hidden text-white"
            />
            <div className="flex flex-col w-full gap-6">
                <div className="text-center text-sm hidden md:block">
                    <BreadCrumbs
                        breadCrumb={[
                            { path: 'HM.com', link: '/' },
                            { path: 'Shopping Bag', link: '/cart' },
                        ]}
                    />
                </div>
                <div className="w-full flex items-center justify-evenly text-sm p-2 py-4 md:pt-0">
                    <p className="hidden md:block ">Free shipping above Rs.1999</p>
                    <p className="">Free & flexible 15 days return</p>
                    <p className="hidden md:block ">Estimated delivery time: 2-7 days</p>
                </div>
                <p className="text-center font-bold pt-2 pb-6 text-sm">
                    {cartData.length ? `Shopping Bag` : `Your shopping bag is empty`}
                </p>
            </div>
            <div className=" flex md:mx-16 md:pt-2 gap-4 items-start justify-between flex-col md:flex-row bg-hmBackgroundColor">
                <CartItems cartItems={cartData} />
                <CartSummery cartData={cartData} />
            </div>
        </div>
    )
}
export default CartComponent
