import { CartType } from '@repo/types/types'
import ProductContainer3 from './ProductContainer3.component'

type CartItemType = {
    cartItems: CartType[]
}

const CartItems: React.FC<CartItemType> = ({ cartItems }) => {
    console.log(cartItems.length)
    return (
        <div className=" w-full md:w-[65%] bg-white">
            {cartItems.length ? (
                <div>
                    {cartItems.map((i, index) => {
                        return <ProductContainer3 key={index} cartitem={i} />
                    })}
                </div>
            ) : (
                <div>
                    <h1>Your Shopping cart is Empty!!</h1>
                </div>
            )}
        </div>
    )
}
export default CartItems
