'use client'

import { DropDownData } from '@/dummyData'
import { IconRuler2, IconShoppingBag, IconBuildingStore, IconInfoCircle } from '@tabler/icons-react'
import { ProductDataType } from '@repo/types/types'
import useProductStore from '@/stores/product.store'
import useProductInfo from '@/hooks/useProductInfo'
import { getSKUInfo } from '@/utils/getSKUInfo'
import ImageContainer from '../molecule/imageContainer.component'
import CustomButton from '../atom/button.component'
import Dropdown from '../atom/dropdown.component'
import Favorite from '../atom/favorite.component'
import FitGraph from '../atom/fitGraph.component'
import TextWithIcon from '../atom/iconedText.component'
import ProductDescrption from '../molecule/productDesc.component'
import ReviewStar from '../molecule/reviewStar.component'
import SelectSize from '../molecule/sizeSelection.component'
import SKUSelection from '../molecule/skuSelect.component'
import useCheckoutStore from '@/stores/checkout.store'
import { useAddItemToCart } from '@/hooks/useCart'

type ProductDescriptionTypes = {
    productId: string
}

const ProductDescription: React.FC<ProductDescriptionTypes> = ({ productId }) => {
    const { data: ProductInfo, status } = useProductInfo<ProductDataType>(productId)
    const { skuInfo, setSkuInfo } = useProductStore()
    const { size } = useCheckoutStore()
    const addToCart = useAddItemToCart({
        name: ProductInfo?.name ?? '',
        skuId: skuInfo?.skuId ?? '',
        image: skuInfo?.images.mainImageSrc ?? '',
        quantity: 1,
        price: skuInfo?.skuPrice.salePrice ?? 0,
        size: size,
        skuColorName: skuInfo?.skuColorName ?? '',
    })

    if (status === 'pending') return <h1>Loading...</h1>
    if (status === 'error') return <h1>Something went wrong!!</h1>
    if (status === 'success' && ProductInfo && !skuInfo) {
        const newSkuInfo = getSKUInfo(ProductInfo)
        newSkuInfo && setSkuInfo(newSkuInfo)
    }
    if (!skuInfo) return <h1>No SKU information available</h1>

    const handleAddToCart = () => {
        addToCart.mutate()
    }
    return (
        <>
            <div className="md:flex flex-row-reverse w-full ">
                <div className="md:hidden flex justify-center items-center my-4 aa">
                    <ImageContainer imgSrc={skuInfo.images.mainImageSrc} imgAlt={ProductInfo.name} size="large">
                        <Favorite position="top-right" />
                    </ImageContainer>
                </div>
                <div className="pt-6 w-full md:w-1/3 md:px-4">
                    <ProductDescrption
                        productName={ProductInfo.name}
                        productPrice={skuInfo.skuPrice.salePrice}
                        memberPrice={skuInfo.skuPrice?.memberPrice}
                    />
                    <SKUSelection SKUData={ProductInfo.skuInfo} />
                    <SelectSize SKUSizeList={skuInfo.sizes} />
                    <TextWithIcon text="Size Guide" className="underline py-4 text-sm">
                        <IconRuler2 stroke={1} width={20} height={20} />
                    </TextWithIcon>
                    <CustomButton buttonText="Add" varient="BlackOne" handleclickFn={handleAddToCart}>
                        <IconShoppingBag stroke={1} />
                    </CustomButton>
                    <div className="pt-4">
                        <TextWithIcon className="text-sm py-1" text="Find in store">
                            <IconBuildingStore width={20} height={20} stroke={1} />
                        </TextWithIcon>
                        <TextWithIcon className="text-sm py-1" text="Delivery Time : 2-7 days">
                            <IconInfoCircle width={20} height={20} stroke={1} />
                        </TextWithIcon>
                    </div>
                    <div>
                        <p className="font-extrabold p-1 pb-12">Delivery and Payment</p>
                    </div>
                    <ReviewStar /> {/* TODO need to implemet the feature */}
                    <FitGraph /> {/* TODO need to implemet the feature */}
                    <div className="flex flex-col w-full pb-2">
                        {DropDownData.map((i, index) => {
                            return <Dropdown title={i.title} details={i.Summery} key={index} />
                        })}
                    </div>
                </div>
                <div className="md:w-2/3 md:grid grid-cols-2 py-4 gap-4 items-center justify-center">
                    {skuInfo.images.altImages.map((i, index) => {
                        return <ImageContainer imgAlt={ProductInfo.name} imgSrc={i} key={index} size="large" />
                    })}
                </div>
            </div>
        </>
    )
}

export default ProductDescription
