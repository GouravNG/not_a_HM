import ListLinks from "../common/listlink.component"
import LOGO from "./logo.component"
import Navigation from "./navigation.component"
import SearchBar from "../common/search.component"
import PrimaryFunctions from "./primaryFunction.component"

const Header = () => {
  return (
    <>
      <header className="flex flex-row-reverse md:flex-col items-center justify-between p-4  md:p-8">
        <div className="flex justify-end md:justify-between w-full md:pb-6">
          <div className="hidden md:flex ">
            <ListLinks />
          </div>
          <div className="hidden md:block">
            <LOGO size={65} />
          </div>
          <PrimaryFunctions />
        </div>
        <div className="flex w-full items-center justify-between relative">
          <Navigation />
          <SearchBar />
        </div>
      </header>
    </>
  )
}
export default Header
