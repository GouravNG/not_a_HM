import { IconMenu2 } from '@tabler/icons-react'
import LOGO from '../atom/logo.component'
import ListLinks from '../molecule/listlink.component'
import PrimaryFunctions from '../molecule/primaryFunction.component'
import SearchBar from '../molecule/search.component'
import Navigation from '../organism/navigation.component'


const Header = () => {
    return (
        <header className="flex p-3 px-4 md:p-6">
            <div className="hidden md:block flex-1 pt-4">
                <ListLinks />
            </div>
            <div className="flex-[2] flex md:flex-col gap-4 md:justify-center items-center">
                <IconMenu2 className="md:hidden" stroke={1} />
                <LOGO size={70} className="hidden md:block" />
                <LOGO size={43} className="md:hidden" />
                <Navigation/>
            </div>
            <div className="flex-1 flex flex-col items-end justify-between pt-2">
                <PrimaryFunctions />
                <SearchBar />
            </div>
        </header>
    )
}
export default Header
