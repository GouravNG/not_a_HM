import { faker } from '@faker-js/faker';
import type { ProductDataType, SubCategoryTypes } from '@repo/types/types';

export const mainCategories = ["Ladies", "Men", "Baby", "Kids", "H&M HOME", "Sport", "Sale", "Sustainability"];

export const allMerchData: SubCategoryTypes = {
  "Ladies": {
    "Offers": ["Member Exclusive Prices", "Everyday staples starting ₹799"],
    "New Arrivals": ["View All", "Women's Clothing | New Arrivals"],
    "Trending Now": ["Trending Now"],
    "Shop by Product": [
      "View All", "Tops", "Sweatshirts & Hoodies", "Knitwear", "Sweaters & Cardigans",
      "Jackets & Coats", "Dresses", "Shirts & Blouses", "Blazers & Waistcoats", "Jeans",
      "Trousers", "Nightwear", "Lingerie", "Accessories", "Shoes", "Shorts", "Skirts",
      "Basics", "Swimwear & Beachwear", "H&M Edition", "Merch & Graphics", "Jumpsuits",
      "Loungewear", "Sportswear", "Socks & Tights", "Maternity Wear", "Sale",
      "Premium Selection", "Care products"
    ],
    "Sustainability": ["H&M Take Care", "Learn More"]
  },
  "Men": {
    "Offers": ["Member Exclusive Prices", "Shirts: From ₹1499", "Overshirts & Jackets: From ₹1999"],
    "New Arrivals": ["View All", "Clothes", "Accessories"],
    "Trending Now": ["Trending Now"],
    "Christmas Shop": ["The Holiday Shop", "Gift guide for him"],
    "Shop by Product": [
      "View All", "Hoodies & Sweatshirts", "Shirts", "T-shirts & Tops", "Jackets & Coats",
      "Trousers", "Jeans", "Sweaters & Cardigans", "Accessories", "Polos", "Basics",
      "Blazers & Suits", "Shorts", "Underwear", "Premium Selection", "Sleepwear & Loungewear",
      "Shoes", "Swimwear", "Socks", "Sportswear", "Care products", "Sale"
    ],
    "Sustainability": ["H&M Take Care", "Learn More"]
  },
  "Baby": {
    "Member Exclusive Prices": ["Shop now"],
    "Life with Baby": ["Guides and inspo"],
    "Trending Now": ["Season essentials starting Rs.499", "H&M Adorables"],
    "Newborn": ["View All", "New Arrivals", "Clothing", "Accessories", "Outerwear"],
    "Baby Boy": ["View all", "New Arrivals", "Clothing", "Outerwear", "Accessories"],
    "Baby Girl": ["View all", "New Arrivals", "Clothing", "Outerwear", "Accessories"],
    "Shop by Product": [
      "View all", "New Arrivals", "Clothing", "Outerwear", "Accessories",
      "Party & Occasion", "Sale"
    ],
    "Sustainability": ["H&M Take Care", "Learn More"]
  },
  "Kids": {},
  "H&M HOME": {},
  "Sport": {},
  "Sale": {},
  "Sustainability": {}
};

const generateProduct = (id: number): ProductDataType => {
  const name = faker.commerce.productName();
  const skuCount = faker.number.int({ min: 1, max: 3 });
  const skuInfo = Array.from({ length: skuCount }).map((_, index) => {
    const skuId = `${id}${index + 1}`;
    const retailPrice = faker.number.int({ min: 500, max: 5000 });
    const salePrice = Math.floor(retailPrice * 0.8);
    const memberPrice = Math.floor(retailPrice * 0.7);

    return {
      skuId,
      skuColorName: faker.color.human(),
      skuFit: faker.number.int({ min: 1, max: 10 }),
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      skuPrice: {
        retailPrice,
        salePrice,
        memberPrice,
      },
      images: {
        mainImageSrc: "/shirt.jpg",
        altImages: ["/shirt.jpg", "/shirt.jpg", "/shirt.jpg", "/shirt.jpg"],
      },
    };
  });

  return {
    id: id.toString(),
    name,
    parentCategory: faker.helpers.arrayElement(mainCategories),
    defaultSkuId: skuInfo[0]!.skuId,
    colorCodes: skuInfo.map(() => faker.color.rgb()),
    skuInfo,
  };
};

export const allProducts: ProductDataType[] = Array.from({ length: 100 }).map((_, i) => generateProduct(10001 + i));
