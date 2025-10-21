export type ClothingCategory = 'tops' | 'bottoms' | 'outerwear' | 'shoes';

export type ClothingItem = {
  id: string;
  brand: string;
  name: string;
  category: ClothingCategory;
  price: string;
  colors: string[];
  sizes: string[];
  imageUrl: string;
  description: string;
  baseColor: string;
  accentColor?: string;
};

export const clothingItems: ClothingItem[] = [
  {
    id: 'zara-draped-trench',
    brand: 'Zara',
    name: 'Draped Trench Coat',
    category: 'outerwear',
    price: '149,00 €',
    colors: ['#c8b49a', '#3f3a36'],
    sizes: ['XS', 'S', 'M', 'L'],
    imageUrl: 'https://static.zara.net/photos///2024/V/0/1/p/7504/853/712/2/w/750/7504853712_1_1_1.jpg?ts=1706697877423',
    description: 'Trench coat morbido con taglio fluido e cintura coordinata, ideale per layer leggeri.',
    baseColor: '#c8b49a'
  },
  {
    id: 'zara-knit-top',
    brand: 'Zara',
    name: 'Top Knit Monospalla',
    category: 'tops',
    price: '25,95 €',
    colors: ['#fbe9e7', '#1e1e1e'],
    sizes: ['XS', 'S', 'M', 'L'],
    imageUrl: 'https://static.zara.net/photos///2024/V/0/1/p/0857/302/712/2/w/750/0857302712_1_1_1.jpg?ts=1707237009209',
    description: 'Top crop in maglia con linea monospalla e texture elasticizzata.',
    baseColor: '#fbe9e7',
    accentColor: '#1e1e1e'
  },
  {
    id: 'hm-straight-jeans',
    brand: 'H&M',
    name: 'Straight Jeans Comfort Stretch',
    category: 'bottoms',
    price: '39,99 €',
    colors: ['#3a4a5a', '#9bb1c9'],
    sizes: ['34', '36', '38', '40', '42'],
    imageUrl: 'https://image.hm.com/assets/hm/60/11/6011917858f8c5d787ef3cdeaa541167a6cb8008.jpg?imwidth=768',
    description: 'Jeans straight in denim comfort stretch con lavaggio intermedio.',
    baseColor: '#3a4a5a'
  },
  {
    id: 'hm-relaxed-blazer',
    brand: 'H&M',
    name: 'Blazer Relaxed Fit',
    category: 'outerwear',
    price: '69,99 €',
    colors: ['#1a2733', '#6e7f91'],
    sizes: ['XS', 'S', 'M', 'L'],
    imageUrl: 'https://image.hm.com/assets/hm/1e/98/1e98508ed6c0c9d0df6eb9d4b7f3d1b77c2f4a75.jpg?imwidth=768',
    description: 'Blazer destrutturato con spalle morbide, ideale per look business-casual.',
    baseColor: '#1a2733'
  },
  {
    id: 'uniqlo-airism-tshirt',
    brand: 'Uniqlo',
    name: 'T-shirt Airism Cotton Oversize',
    category: 'tops',
    price: '19,90 €',
    colors: ['#f5f5f5', '#2f2f2f', '#9c9c9c'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    imageUrl: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/465722/item/goods_01_465722.jpg?width=750',
    description: 'T-shirt oversize in tessuto Airism, fresca e traspirante per layer quotidiani.',
    baseColor: '#f5f5f5',
    accentColor: '#2f2f2f'
  },
  {
    id: 'zara-platform-sandals',
    brand: 'Zara',
    name: 'Sandali Platform Nappa',
    category: 'shoes',
    price: '69,95 €',
    colors: ['#f2ede4', '#212121'],
    sizes: ['36', '37', '38', '39', '40', '41'],
    imageUrl: 'https://static.zara.net/photos///2024/V/1/1/p/2351/020/050/2/w/750/2351020050_1_1_1.jpg?ts=1706008293653',
    description: 'Sandali platform in nappa con cinturino, ideali per look serali.',
    baseColor: '#f2ede4'
  }
];

export const clothingCategories: ClothingCategory[] = ['tops', 'bottoms', 'outerwear', 'shoes'];
