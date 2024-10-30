'use client'

type FavoriteTypes = {
    position: 'top-right' | 'botton-right'
}

import { IconHeart } from '@tabler/icons-react'
import { useState } from 'react'

export const Favorite: React.FC<FavoriteTypes> = ({ position }) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(true)
    const handleFavorite = () => {
        setIsFavorite(!isFavorite)
    }
    const positionStyle = position === 'top-right' ? 'items-start justify-end' : 'items-end justify-end'

    return (
        <>
            <div
                className={`absolute w-full h-full flex items-start justify-end p-4 hover:cursor-pointer ${positionStyle}`}
                onClick={handleFavorite}
            >
                <IconHeart stroke={0.5} color="black" width={32} height={32} fill={isFavorite ? 'red' : 'white'} />
            </div>
        </>
    )
}

export default Favorite
