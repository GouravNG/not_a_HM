import { IconHeart, IconSearch, IconUserCircle } from '@tabler/icons-react'
import ShoppingCart from './shoppingCart.component'
const PrimaryFunctions = () => {
    return (
        <div className="flex gap-4 z-20">
            <span className="flex gap-1">
                <IconUserCircle size={35} stroke={1} />
                <p className="hidden md:block pt-2 text-sm">Sign in</p>
            </span>
            <span className="flex gap-1 md:hidden">
                <IconSearch size={35} stroke={1} />
            </span>
            <span className="flex gap-1 ">
                <IconHeart size={35} stroke={1} />
                <p className="hidden md:block pt-2 text-sm">Favourites</p>
            </span>
            <span className="flex gap-1">
                <ShoppingCart />
            </span>
        </div>
    )
}

export default PrimaryFunctions
