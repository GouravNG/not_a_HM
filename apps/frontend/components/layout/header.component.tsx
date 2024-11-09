import { IconMenu2 } from '@tabler/icons-react'
import ListLinks from '../common/listlink.component'
import SearchBar from '../common/search.component'
import LOGO from './logo.component'
import PrimaryFunctions from './primaryFunction.component'

const Header = () => {
    return (
        <header className="flex p-3 px-4 md:p-6">
            <div className="hidden md:block flex-1 pt-4">
                <ListLinks />
            </div>
            <div className="flex-1 flex md:flex-col gap-4 md:justify-center items-center">
                <IconMenu2 className="md:hidden" stroke={1} />
                <LOGO size={70} className="hidden md:block" />
                <LOGO size={43} className="md:hidden" />
                <nav className="hidden md:block md:mt-4">Navigation</nav>
            </div>
            <div className="flex-1 flex flex-col items-end justify-between pt-2">
                <PrimaryFunctions />
                <SearchBar />
            </div>
        </header>
    )
}
export default Header
