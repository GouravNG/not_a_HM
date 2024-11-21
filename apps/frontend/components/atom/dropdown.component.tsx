import { IconChevronDown } from '@tabler/icons-react'
import React from 'react'

type DropDownType = {
    title: string
    details: string
}

const Dropdown: React.FC<DropDownType> = ({ title, details }) => {
    return (
        <div className="styled-toggles pb-2">
            <details className="border-t-2">
                <summary className="DropdownStyle cursor-pointer py-2 flex justify-between items-center hover:bg-gray-100">
                    {title}
                    <span className="ml-2 transition-transform transform duration-300 details-open:rotate-180 ">
                        <IconChevronDown stroke={1} />
                    </span>
                </summary>
                <p className="py-2 text-sm font-thin">{details}</p>
            </details>
        </div>
    )
}

export default Dropdown
