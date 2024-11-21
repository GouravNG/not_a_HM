import { IconStar, IconStarHalfFilled } from '@tabler/icons-react'

const ReviewStar = () => {
    return (
        <div className="flex items-center pb-8">
            <IconStar width={18} height={18} stroke={1} fill="true" />
            <IconStar width={18} height={18} stroke={1} fill="true" />
            <IconStar width={18} height={18} stroke={1} fill="true" />
            <IconStar width={18} height={18} stroke={1} fill="true" />
            <IconStarHalfFilled width={18} height={18} stroke={1} />
            <p>(32 Reviews)</p>
        </div>
    )
}

export default ReviewStar
