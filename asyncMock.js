const products = [
  {
    id: 1,
    title: "Portatil Gaming",
    price: "1099",
    category: "gaming",
    description:
      'Portátil Acer Gaming Nitro 5 AN515-58 Intel Core i9-12900H/32GB/1TB SSD/RTX 4060/15.6" ',
    image: "/public/productos/acernitro.jpg",
  },
  {
    id: 2,
    title: "Portatil Oficina",
    price: "549",
    category: "office",
    description: 'HP 15-fd0080ns Intel Core i5-1334U/16GB/512GB SSD/15.6"',
    image: "/public/productos/hp1.jpg",
  },
  {
    id: 3,
    title: "Portatil Gaming",
    price: "1548",
    category: "gaming",
    description:
      'MSI Sword 16 HX B14VFKG-054XES Intel Core i9-14900HX/32GB/1TB SSD/RTX 4060/16"',
    image: "/public/productos/msi1.jpg",
  },
  {
    id: 4,
    title: "Portatil Gaming",
    price: "1643",
    category: "gaming",
    description:
      'ASUS ROG Strix G16 G614JIR-N4003 Intel Core i9-14900HX/32GB/1TB SSD/RTX 4070/16"',
    image: "/public/productos/asus1.jpg",
  },
  {
    id: 5,
    title: "Portatil de Casa",
    price: "599",
    category: "home",
    description:
      'Portátil ASUS Vivobook 15 M1502YA-NJ201W AMD Ryzen 7 7730U/16GB/512GB SSD/15.6"',
    image: "/public/productos/asus2.jpg",
  },
  {
    id: 6,
    title: "Portatil de Casa",
    price: "669",
    category: "home",
    description: 'HP 15-fd0020ns Intel Core i7-1355U/16GB/1TB SSD/15.6"',
    image: "/public/productos/hp2.jpg",
  },
  {
    id: 7,
    title: "Portatil de Casa",
    price: "329",
    category: "home",
    description:
      'Acer Chromebook Plus 514 CB514-3H-R81B AMD Ryzen 3 7320C/8GB/256GB SSD/14"',
    image: "/public/productos/acernitro2.jpg",
  },
  {
    id: 8,
    title: "Portatil Gaming",
    price: "969",
    category: "gaming",
    description:
      'MSI Cyborg 15 A13VF-828XES Intel Core i7-13620H/16GB/512GB SSD/RTX 4060/15.6"',
    image: "/public/productos/msi2.jpg",
  },
  {
    id: 9,
    title: "Portatil Gaming",
    price: "949",
    category: "gaming",
    description:
      'Lenovo LOQ 15IRH8 Intel Core i7-13620H/16GB/512GB SSD/RTX 4060/15.6"',
    image: "/public/productos/lenovo1.jpg",
  },
  {
    id: 10,
    title: "Portatil de Casa",
    price: "592",
    category: "home",
    description:
      'Portátil Lenovo IdeaPad Slim 3 15IRH8 Intel Core i7-13620H/16GB/1TB SSD/15.6"',
    image: "/public/productos/lenovo2.jpg",
  },
  {
    id: 11,
    title: "Portatil Oficina",
    price: "1349",
    category: "office",
    description:
      'Portátil Apple MacBook Air Apple M3 8 Núcleos/16GB/256GB SSD/GPU 10 Núcleos/15.3"',
    image: "/public/productos/mac.jpg",
  },
  {
    id: 12,
    title: "Portatil de Casa",
    price: "429",
    category: "home",
    description:
      'Portátil ASUS Vivobook Go 15 E1504GA-NJ580W Intel Core i3-N305/8GB/512GB SSD/15.6"',
    image: "/public/productos/asus3.jpg",
  },
  {
    id: 13,
    title: "Portatil Oficina",
    price: "2299",
    category: "office",
    description:
      'Portátil Apple MacBook Pro Apple M4 Pro 12 Núcleos/24GB/512GB SSD/GPU 16 Núcleos/14"',
    image: "/public/productos/mac2.jpg",
  },
  {
    id: 14,
    title: "Portatil Oficina",
    price: "719",
    category: "office",
    description:
      'Portátil Dell Inspiron 3530 Intel Core i7-1355U/16GB/512GB SSD/15.6"',
    image: "/public/productos/dell.jpg",
  },
  {
    id: 15,
    title: "Portatil Gaming",
    price: "3000",
    category: "gaming",
    description:
      'ASUS ROG Zephyrus G14 OLED GA403UI-QS049 AMD Ryzen 9 8945HS/32GB/1TB/RTX 4070/14"',
    image: "/public/productos/asus4.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};

export const getCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 1000);
  });
};
