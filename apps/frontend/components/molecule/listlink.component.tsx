import { IconDots } from '@tabler/icons-react'
import { services } from '../../website.properties'
import NormalLink from '../atom/normallink.component'

const ListLinks = () => {
    return (
        <>
            <ul className="flex gap-5 text-sm ">
                {services.map((i, index) => {
                    return (
                        <li key={index}>
                            <NormalLink linkName={i.service_name} linkURL={i.link} />
                        </li>
                    )
                })}
                <li>
                    <IconDots stroke={1} size={25} /> {/* Need to add ... link*/}
                </li>
            </ul>
        </>
    )
}

export default ListLinks
