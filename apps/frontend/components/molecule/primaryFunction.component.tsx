import {
  IconHeart,
  IconSearch,
  IconShoppingBag,
  IconUserCircle,
} from "@tabler/icons-react"
const PrimaryFunctions = () => {
  return (
    <div className="flex gap-4">
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
        <IconShoppingBag size={35} stroke={1} />
        <p className="hidden md:block pt-2 text-sm">Shopping Bag (0)</p>
      </span>
    </div>
  )
}

export default PrimaryFunctions
