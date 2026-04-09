import type { Product } from '../types'

type AppleProductSeed = {
  name: string
  description: string
  price: number
  image: string
  category: string
}

export interface AppleProduct extends Product {
  category: string
  description: string
}

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64)

export const appleProductsSeed: AppleProductSeed[] = [  
  {
    name: 'iPhone 14',
    description: 'Crash detection and improved cameras.',
    price: 79900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/261932_0_l9la51.png?tr=w-1000',
    category: 'iphone',
  },
  {
    name: 'iPhone 14 Plus',
    description: 'Large display with long battery.',
    price: 89900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/261933_0_k3wmbi.png?tr=w-1000',
    category: 'iphone',
  },
  {
    name: 'iPhone 14 Pro',
    description: 'Dynamic Island and A16 chip.',
    price: 119900,
    image: 'https://maplestore.in/cdn/shop/files/iPhone_14_Pro_Space_Black_PDP_Image_Position-4__WWEN_05a0ef0a-88ef-4b96-b294-7d97936d5fd9.webp?v=1774264011&width=1445',
    category: 'iphone',
  },
  {
    name: 'iPhone 14 Pro Max',
    description: 'Top-tier performance and display.',
    price: 129900,
    image: 'https://www.myg.in/images/thumbnails/600/600/detailed/84/dp1-removebg-preview.png.png',
    category: 'iphone',
  },

  {
    name: 'iPhone 15',
    description: 'USB-C and improved camera.',
    price: 79900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/300722_0_u0kcxr.png?tr=w-1000',
    category: 'iphone',
  },
  {
    name: 'iPhone 15 Plus',
    description: 'Bigger display and battery.',
    price: 89900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/300774_0_oiwhpt.png?tr=w-1000',
    category: 'iphone',
  },
  {
    name: 'iPhone 15 Pro',
    description: 'Titanium design with A17 Pro.',
    price: 134900,
    image: 'https://maplestore.in/cdn/shop/files/Iphone15ProNatural1_83009b01-dbca-48de-b7e0-436cec7d5e25.png?v=1770984781',
    category: 'iphone',
  },
  {
    name: 'iPhone 15 Pro Max',
    description: 'Best camera and battery.',
    price: 159900,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRp2aa0vqW0GtRUNOWFf4cj2ilqrHk5U7CAMNeZCRjbsHbyrM7yI9bll1owy0eN03uzSMl75ont0IBmTsHXH_pTs9CDGUbuy1-7raGL_4OKQUQvLdQBAt1dTg',
    category: 'iphone',
  },

  {
    name: 'iPhone 16',
    description: 'Next-gen performance and AI features.',
    price: 89900,
    image: 'https://vsprod.vijaysales.com/media/catalog/product/2/3/232285-image.jpg?optimize=medium&fit=bounds&height=500&width=500',
    category: 'iphone',
  },
  {
    name: 'iPhone 16 Plus',
    description: 'Larger display with enhanced battery.',
    price: 99900,
    image: 'https://vsprod.vijaysales.com/media/catalog/product/2/3/232270-image.jpg?optimize=medium&fit=bounds&height=500&width=500',
    category: 'iphone',
  },
  {
    name: 'iPhone 16 Pro',
    description: 'Advanced camera and chip.',
    price: 139900,
    image: 'https://maplestore.in/cdn/shop/files/download_76140594-d4b7-4489-8a0e-55f20e5424be_1.png?v=1771505961',
    category: 'iphone',
  },
  {
    name: 'iPhone 16 Pro Max',
    description: 'Ultimate flagship experience.',
    price: 159900,
    image: 'https://rukminim2.flixcart.com/image/3420/3420/xif0q/mobile/w/z/h/-original-imahggetkf6y67sr.jpeg?q=90',
    category: 'iphone',
  },

  {
    name: 'iPhone 17',
    description: 'Next-gen design and performance.',
    price: 99900,
    image: 'https://vsprod.vijaysales.com/media/catalog/product/i/p/iphone_17_mist_blue_pdp_image_position_1__en-in_1.jpg?optimize=medium&fit=bounds&height=500&width=500',
    category: 'iphone',
  },
  {
    name: 'iPhone 17 Pro Max',
    description: 'Future flagship with cutting-edge features.',
    price: 169900,
    image: 'https://vsprod.vijaysales.com/media/catalog/product/i/p/iphone_17_pro_cosmic_orange_pdp_image_position_1__en-in_1.jpg?optimize=medium&fit=bounds&height=500&width=500',
    category: 'iphone',
  },

  // =========================
  // MacBooks (M1 → M5)
  // =========================
  {
    name: 'MacBook Air M1',
    description: 'Fanless design with incredible battery life.',
    price: 99900,
    image: 'https://www.apple.com/v/macbook-air/y/images/overview/design/color/design_top_starlight__dtojfd6ibywm_large_2x.jpg',
    category: 'mackbooks',
  },

  {
    name: 'MacBook Air M2',
    description: 'Redesigned with improved performance.',
    price: 114900,
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-size-unselect-202601-gallery-1?wid=5120&hei=3280&fmt=webp&qlt=90&.v=YTFkSnBPS2tMZFdhaFNRRkx6VnJZaUd4WmthcldkemtncUgvMzhXenFEVkJtY3lja2FvNzhqZzhFY0x4NDFzYkE0ZWxMVGt3djRUV0FHWk92REs5YjAxSlgrVWMrMzU1OXo2c2JyNjJZTGpEUE90ekhYc3dvRnFSbFQ0NEVuaVQ&traceId=1',
    category: 'mackbooks',
  },
  {
    name: 'MacBook Air M2 Pro',
    description: 'Pro-level performance for developers.',
    price: 199900,
    image: 'https://rukminim2.flixcart.com/image/3420/3420/xif0q/computer/i/z/n/mphh3hn-a-thin-and-light-laptop-apple-original-imagmfhe3vvshdzc.jpeg?q=90',
    category: 'mackbooks',
  },

  {
    name: 'MacBook Air M3',
    description: 'Faster chip and better efficiency.',
    price: 124900,
    image: 'https://www.imagineonline.store/cdn/shop/files/MacBook_Air_13_in_M3_Silver_PDP_Image_Position_1__en-IN_2a4e1a63-3326-4261-9fb2-a0ccd0dcc46b.jpg?v=1759734080&width=2890',
    category: 'mackbooks',
  },
  {
    name: 'MacBook Air M3 Max',
    description: 'Extreme performance for heavy workloads.',
    price: 249900,
    image: 'https://rukminim2.flixcart.com/image/3420/3420/xif0q/computer/a/j/9/-original-imaguw3htyyfzsrg.jpeg?q=90',
    category: 'mackbooks',
  },

  {
    name: 'MacBook Air M4',
    description: 'Next-gen performance and battery life.',
    price: 134900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/314065_10_zf5gtj.png?tr=w-1000',
    category: 'mackbooks',
  },
  {
    name: 'MacBook Pro M4',
    description: 'Advanced processing and GPU performance.',
    price: 219900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/314266_5_AWEPIwibt.png?updatedAt=1772623920581?tr=w-1000',
    category: 'mackbooks',
  },

  {
    name: 'MacBook Air M5',
    description: 'Future ultra-efficient chip.',
    price: 149900,
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-size-select-202601-13inch?wid=5120&hei=3280&fmt=webp&qlt=90&.v=YTFkSnBPS2tMZFdhaFNRRkx6VnJZZ0dOZysray9HQ25xUFBjc1l1SVBQRG5EMTJnc255akxtMmp5bU5mazhOU2llL1JtdmgzcGVIUDRDUVJnTDZxRi9IeW9zeVB5R1dmem9sYTN4ckVUbEpyanpSTU15V20vUHNpYk1hZWg4QjU&traceId=1',
    category: 'mackbooks',
  },
  {
    name: 'MacBook Pro M5',
    description: 'Top-tier performance for professionals.',
    price: 269900,
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-finish-select-202601-13inch-skyblue?wid=5120&hei=3280&fmt=webp&qlt=90&.v=bDNwVkpTbjZ0OWhXRHdKVDNSeDRwNy8rZ2psWVpNSVZwTU9zSk5pb2VKOE1VandtMHh2UU5ES1NhTjBoM0dDTkVlNEJLYXlpcWN3dVUzSHNPQldJNDUyTGQvczVjTzVnd1B6UVQwaE1kY2hxZ29EcGJPVmdTbEVkVnh1WW5MdWhSOW02S2NIS2N2ZkNWTVZOSXFRUmln&traceId=1',
    category: 'mackbooks',
  },

  // =========================
  // Apple Watch
  // =========================
  {
    name: 'Apple Watch Series 5',
    description: 'Always-on Retina display.',
    price: 30900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/317728_0_TDp5g7mBt.png?updatedAt=1757599157779?tr=w-1000',
    category: 'iwatchs',
  },
  {
    name: 'Apple Watch Series 6',
    description: 'Blood oxygen monitoring.',
    price: 35900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/317593_0_px3ZZ5kMb.png?updatedAt=1757600611688?tr=w-1000',
    category: 'iwatchs',
  },
  {
    name: 'Apple Watch Series 7',
    description: 'Larger display and faster charging.',
    price: 41900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/317420_0_GXzDwy-2h.png?updatedAt=1757583672435?tr=w-1000',
    category: 'iwatchs',
  },
  {
    name: 'Apple Watch Series 8',
    description: 'Temperature sensing and safety features.',
    price: 45900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/317514_0_1H_Iv9cOJ.png?updatedAt=1757598768535?tr=w-1000',
    category: 'iwatchs',
  },
  {
    name: 'Apple Watch Series 9',
    description: 'Improved performance and brightness.',
    price: 41900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/317616_0_L3WF6btYp.png?updatedAt=1757599606185?tr=w-1000',
    category: 'iwatchs',
  },
  {
    name: 'Apple Watch SE',
    description: 'Affordable smartwatch experience.',
    price: 29900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/317397_0_VkkG7MXNz.png?updatedAt=1757583703782?tr=w-1000',
    category: 'iwatchs',
  },
  {
    name: 'Apple Watch Ultra',
    description: 'Rugged design for extreme conditions.',
    price: 89900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/317759_0_NkWJ_a9yK.png?updatedAt=1757523990327?tr=w-1000',
    category: 'iwatchs',
  },
  {
    name: 'Apple Watch Ultra 2',
    description: 'Enhanced GPS and brightness.',
    price: 89900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/317619_0_toqitZGCi_.png?updatedAt=1757601048049?tr=w-1000',
    category: 'iwatchs',
  },

  // =========================
  // AirPods / Headphones
  // =========================
  {
    name: 'AirPods (1st Gen)',
    description: 'Wireless earbuds with seamless Apple integration.',
    price: 12900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20And%20Earphones/Images/317553_0_rluFxUkngM.png?updatedAt=1757512635169?tr=w-1000',
    category: 'earpods and headphones',
  },
  {
    name: 'AirPods (2nd Gen)',
    description: 'Improved connectivity and battery.',
    price: 14900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/301165_1_ctimht.png?tr=w-1000',
    category: 'earpods and headphones',
  },
  {
    name: 'AirPods (3rd Gen)',
    description: 'Spatial audio and new design.',
    price: 19900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/262016_okfsmf.png?tr=w-1000',
    category: 'earpods and headphones',
  },

  {
    name: 'AirPods Pro (1st Gen)',
    description: 'Active Noise Cancellation.',
    price: 24900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/301165_0_rmd0hf.png?tr=w-1000',
    category: 'earpods and headphones',
  },
  {
    name: 'AirPods Pro (2nd Gen)',
    description: 'Improved ANC and sound.',
    price: 24900,
    image: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/251324_0_c1a675.png?tr=w-1000',
    category: 'earpods and headphones',
  },

  {
    name: 'AirPods Max',
    description: 'Premium over-ear headphones with spatial audio.',
    price: 59900,
    image: 'https://www.apple.com/v/airpods-max/k/images/overview/bento/midnight/bento_1_airpod_max_midnight__4jy1tkqh9qay_xlarge_2x.jpg',
    category: 'earpods and headphones',
  },
]

// Convert seed items (name/description/price/image/category) into UI products.
export const appleProducts: Product[] = appleProductsSeed.map((p) => ({
  id: slugify(p.name),
  name: p.name,
  price: p.price,
  imageUrl: p.image,
}))

export const appleProductsWithCategory: AppleProduct[] = appleProductsSeed.map((p) => ({
  id: slugify(p.name),
  name: p.name,
  price: p.price,
  imageUrl: p.image,
  description: p.description,
  category: p.category,
}))

