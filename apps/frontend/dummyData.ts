export const breadCrumb = [
    { path: 'HM.com', link: '' },
    { path: 'Shirt', link: '' },
    { path: 'Men', link: '' },
]

export const skuData = [
    { skuName: 'SKU1', imgSrc: '/shirt.jpg', imgAlt: 'Image 1' },
    { skuName: 'SKU2', imgSrc: '/shirt.jpg', imgAlt: 'Image 2' },
    { skuName: 'SKU3', imgSrc: '/shirt.jpg', imgAlt: 'Image 3' },
    { skuName: 'SKU1', imgSrc: '/shirt.jpg', imgAlt: 'Image 1' },
    { skuName: 'SKU2', imgSrc: '/shirt.jpg', imgAlt: 'Image 2' },
    { skuName: 'SKU3', imgSrc: '/shirt.jpg', imgAlt: 'Image 3' },
    { skuName: 'SKU1', imgSrc: '/shirt.jpg', imgAlt: 'Image 1' },
    { skuName: 'SKU2', imgSrc: '/shirt.jpg', imgAlt: 'Image 2' },
    { skuName: 'SKU3', imgSrc: '/shirt.jpg', imgAlt: 'Image 3' },
]

export const alternativeImage = [
    { imgSrc: '/shirt.jpg', imgAlt: 'Image 1' },
    { imgSrc: '/shirt.jpg', imgAlt: 'Image 2' },
    { imgSrc: '/shirt.jpg', imgAlt: 'Image 3' },
    { imgSrc: '/shirt.jpg', imgAlt: 'Image 1' },
]

export const mainImage = {
    imageSrc: '/shirt.jpg',
    imgAlt: 'Black shirt',
}

type ProductImageType = {
    imgSrc: string
    imgAlt: string
}

type ProductContainerTypes = {
    productName: string
    productPrice: string
    productImage: ProductImageType
    productSKU: string[]
}

export const ProductDetails: ProductContainerTypes = {
    productImage: {
        imgAlt: '/shirt.jpg',
        imgSrc: '/shirt.jpg',
    },
    productName: 'Black Shirt Cotton',
    productPrice: '1299.00',
    productSKU: ['#121111', '#2222d2', '#33c333', '#33a333'],
}

export const SKUSizeData = ['28/29', '28/29', '28/29', '28/29', '28/29', '28/29', '28/29', '28/29']

export const DropDownData = [
    {
        title: 'Description & Fit',
        Summery:
            'a quick fox jumps over the lazy dog. a quick fox jumps over the lazy dog.a quick fox jumps over the lazy dog.',
    },
    {
        title: 'Materials',
        Summery:
            'a quick fox jumps over the lazy dog. a quick fox jumps over the lazy dog.a quick fox jumps over the lazy dog.',
    },
    {
        title: 'Care guilde',
        Summery:
            'a quick fox jumps over the lazy dog. a quick fox jumps over the lazy dog.a quick fox jumps over the lazy dog.',
    },
]

export const dummyData = {
    categoryName: 'Shirt',
    categoryDescription:
        'Lorem ipsum  Lorem ipsum  dolor sit amet consectetur adipisicing elit. Atque fugiat voluptate sint corrupti velit molestiae porro necessitatibus quibusdam, quisquam aliquid quo repudiandae erroroptio eligendi dolorem ab natus odit fugit?dolor sit amet consectetur adipisicing elit. Atque fugiat voluptate sint corrupti velit molestiae porro necessitatibus quibusdam, quisquam aliquid quo repudiandae erroroptio eligendi dolorem ab natus odit fugit?',
    subCategory: [
        {
            text: 'PlainShirt',
            link: '',
        },
        {
            text: 'UnderShirt',
            link: '',
        },
        {
            text: 'Summer Shirt',
            link: '',
        },
        {
            text: 'Summer Shirt',
            link: '',
        },
        {
            text: 'Summer Shirt',
            link: '',
        },
    ],
}
