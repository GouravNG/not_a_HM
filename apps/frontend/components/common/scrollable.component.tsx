import Link from "next/link"

type ScrollableType = {
  ScrollItems: { text: string; link: string }[]
}
export const Scrollable: React.FC<ScrollableType> = ({ ScrollItems }) => {
  return ScrollItems.map((i, index) => {
    return (
      <Link href={i.link} key={index}>
        <span className="border border-black px-5 p-1 text-sm rounded-3xl">
          {i.text}
        </span>
      </Link>
    )
  })
}
