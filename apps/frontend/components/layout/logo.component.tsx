import Image from "next/image"
import Link from "next/link"

type LOGOTypes = {
  size: number
}

const LOGO: React.FC<LOGOTypes> = ({ size }) => {
  return (
    <Link href={"/"}>
      <Image src={"/logo.svg"} alt="logo" width={size} height={size} />
    </Link>
  )
}

export default LOGO
