'use client'

import { SkuInfoType } from '@repo/types/types'
import useProductStore from '@/stores/product.store'
import ImageContainer from './imageContainer.component'

type SKUSelectionType = {
    SKUData: SkuInfoType[]
}

const SKUSelection: React.FC<SKUSelectionType> = ({ SKUData }) => {
    const { setSkuInfo, skuInfo } = useProductStore()
    const handleSKUSelection = (index: number) => SKUData[index] && setSkuInfo(SKUData[index])

    return (
        <div className="w-full">
            <p className="text-center text-sm py-4">{skuInfo?.skuColorName}</p>
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
