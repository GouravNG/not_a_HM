import { IconSearch } from "@tabler/icons-react"
const SearchBar = () => {
  return (
    <>
      <div className="hidden md:flex gap-2 border-b-[1px] items-center justify-start border-black w-64 pb-2">
        <IconSearch stroke={1} />
        <p>Search</p>
      </div>
    </>
  )
}
export default SearchBar
