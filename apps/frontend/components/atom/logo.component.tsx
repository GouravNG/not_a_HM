import Image from 'next/image'
import Link from 'next/link'

type LOGOTypes = {
    size: number
    className?: string
}

const LOGO: React.FC<LOGOTypes> = ({ size, className = '' }) => {
    return (
        <Link href={'/'} className={`${className}`}>
            <Image src={'/logo.svg'} alt="logo" width={size} height={size} />
        </Link>
    )
}

export default LOGO
