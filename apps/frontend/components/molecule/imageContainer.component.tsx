import Image from 'next/image'

type CommonImageContainerTypes = {
    imgSrc: string
    imgAlt: string
    className?: string
    children?: React.ReactNode
}
type ImageContainerWithSizes = CommonImageContainerTypes & {
    size: 'small' | 'medium' | 'large'
    scale?: never
}
type ImageContainerWithScale = CommonImageContainerTypes & {
    scale: number
    size?: never
}

type ImageContainerTypes = ImageContainerWithScale | ImageContainerWithSizes

const ImageContainer: React.FC<ImageContainerTypes> = ({ imgSrc, imgAlt, size, scale, className = '', children }) => {
    const baseStyle = `flex items-center justify-center`
    const customStyle = className

    if (!scale) {
        switch (size) {
            case 'small':
                scale = 70
                break
            case 'medium':
                scale = 220
                break
            case 'large':
                scale = 440
                break
            default:
                scale = 0
        }
    }

    return (
        <div className={`${customStyle}${baseStyle} relative`}>
            {children}
            <Image src={imgSrc} alt={imgAlt} width={scale} height={90} />
        </div>
    )
}

export default ImageContainer

// TODO:autoadjust property
