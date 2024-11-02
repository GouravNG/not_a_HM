import Link from 'next/link'

type SubCategoryType = {
    ScrollItems: { text: string; link: string }[]
    className?: string
}
const SubCategory: React.FC<SubCategoryType> = ({ ScrollItems, className }) => {
    return ScrollItems.map((i, index) => {
        return (
            <Link href={i.link} key={index}>
                <span className={`px-5 py-2 border border-black text-sm rounded-3xl ${className}`}>{i.text}</span>
            </Link>
        )
    })
}

export default SubCategory
