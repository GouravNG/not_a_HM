import LOGO from "./logo.component"
import { IconMenu2 } from "@tabler/icons-react"

const Navigation = () => {
  return (
    <>
      <nav className="w-full ">
        <div className="md:hidden flex gap-4 items-center">
          <IconMenu2 size={30} stroke={1} />
          <LOGO size={50} />
        </div>
        <div className="hidden md:flex items-center justify-center w-full absolute">
          <ul className="flex gap-14">
            <li className="font-semibold">One</li>
            <li className="font-semibold">two</li>
            <li className="font-semibold">One</li>
            <li className="font-semibold">two</li>
            <li className="font-semibold">One</li>
            <li className="font-semibold">two</li>
            <li className="font-semibold">One</li>
            <li className="font-semibold">two</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navigation
