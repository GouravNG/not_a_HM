'use client'
import { IconShoppingBag } from '@tabler/icons-react'
import Hover from '../atom/onHover.component'
import MiniCart from '../organism/miniCart.component'
import { useGetCart } from '@/hooks/useCart'
import { CartType } from '@repo/types/types'

const ShoppingCart = () => {
    const { data } = useGetCart<CartType[]>()
    const itemCount = data?.length
    return (
        <Hover varient="left" HoverComponenet={<MiniCart />}>
            <div className="flex">
                <IconShoppingBag size={35} stroke={1} />
                <p className="hidden md:block pt-2 text-sm">Shopping Bag ({itemCount})</p>
            </div>
        </Hover>
    )
}

export default ShoppingCart
