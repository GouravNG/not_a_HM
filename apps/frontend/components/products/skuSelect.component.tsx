'use client'

import { useState } from 'react'
import ImageContainer from '../common/imageContainer.component'
import { SkuInfoType } from '@repo/types/types'

type SKUSelectionType = {
    SKUData: SkuInfoType[]
}

const SKUSelection: React.FC<SKUSelectionType> = ({ SKUData }) => {
    const [skuName, setSkuName] = useState<string>(SKUData[0]?.skuColorName || '')

    const handleSKUSelection = (index: number) => {
        setSkuName(SKUData[index]?.skuColorName || '')
    }

    return (
        <div className="w-full">
            <p className="text-center text-sm py-4">{skuName}</p>
            <div className="w-full flex gap-4 items-center justify-start md:grid md:grid-cols-5  md:justify-center overflow-x-auto md:flex-wrap">
                {SKUData.map((i, index) => {
                    return (
                        <div key={index} onClick={() => handleSKUSelection(index)} className={`w-fit flex-shrink-0`}>
                            <ImageContainer imgSrc={i.images.mainImageSrc} imgAlt={i.skuColorName} size="small" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SKUSelection
