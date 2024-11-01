import { IconBuildingStore, IconInfoCircle, IconRuler2, IconShoppingBag } from '@tabler/icons-react'
import BreadCrumbs from '../../../components/common/breadCrumbs.component'
import { alternativeImage, breadCrumb, DropDownData, mainImage, skuData, SKUSizeData } from '../../../dummyData'
import ImageContainer from '../../../components/common/imageContainer.component'
import Favorite from '../../../components/common/favorite.component'
import ProductDescrption from '../../../components/common/productDesc.component'
import SKUSelection from '../../../components/products/skuSelect.component'
import SelectSize from '../../../components/products/sizeSelection.comonent'
import TextWithIcon from '../../../components/common/iconedText.component'
import ReviewStar from '../../../components/common/reviewStar.component'
import Dropdown from '../../../components/common/dropdown.component'
import FitGraph from '../../../components/common/fitGraph.component'
import CustomButton from '../../../components/common/button.component'

const PDP = () => {
    return (
        <div className="px-4">
            <BreadCrumbs breadCrumb={breadCrumb} />
            <div className="md:flex flex-row-reverse w-full ">
                <div className="md:hidden flex justify-center items-center my-4">
                    <ImageContainer imgSrc={mainImage.imageSrc} imgAlt={mainImage.imgAlt} size="large">
                        <Favorite position="top-right" />
                    </ImageContainer>
                </div>
                <div className="pt-6 w-full md:w-1/3 md:px-4">
                    <ProductDescrption productName="Regular Fit Suite trouser" productPrice="Rs. 2,299.00" />
                    <SKUSelection SKUData={skuData} />
                    <SelectSize SKUSizeList={SKUSizeData} />
                    <TextWithIcon text="Size Guide" className="underline py-4 text-sm">
                        <IconRuler2 stroke={1} width={20} height={20} />
                    </TextWithIcon>
                    <CustomButton buttonText="Add" varient="BlackOne">
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
                    {alternativeImage.map((i, index) => {
                        return <ImageContainer imgAlt={i.imgAlt} imgSrc={i.imgSrc} key={index} size="large" />
                    })}
                </div>
            </div>
            {/* TODO: Need to add upsell and cross sell product */}
        </div>
    )
}
export default PDP
