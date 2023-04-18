// brand, color, category, gender : 상수
// 블랙 네이비 화이트 아이보리 스카이 블루 핑크 레드 브라운 그레이

// Mock data
const brands = [
  'nike',
  'adidas',
  'newBalance',
  'asics',
  'descente',
  'converse',
  'kumkang',
  'babara',
  'saera',
  'tandy',
  'rockport',
  'soda',
];

const colors = [
  'black',
  'white',
  'navy',
  'ivory',
  'sky',
  'blue',
  'pink',
  'red',
  'brown',
  'gray',
  'orange',
  'yellow',
  'purple',
];

const gender = ['male', 'female'];

const categories = ['sneakers', 'sandal', 'slipper', 'walking', 'slipOn', 'loafer', 'boots', 'etc'];

let products = [
  {
    id: 1,
    brand: 0,
    category: 0,
    name: 'ultra boost 21',
    price: 100000,
    description: '이동규',
    imgURL: 'img/sneakers.jpg',
    dateOfManufacture: new Date('2021-4-15'),
    favorites: 123,
    details: {
      gender: 0,
      color: 1,
      sizes: [
        { size: 230, stock: 19 },
        { size: 235, stock: 23 },
        { size: 240, stock: 30 },
        { size: 245, stock: 14 },
        { size: 250, stock: 20 },
        { size: 255, stock: 37 },
        { size: 260, stock: 0 },
        { size: 265, stock: 10 },
        { size: 270, stock: 2 },
        { size: 275, stock: 1 },
        { size: 280, stock: 16 },
        { size: 285, stock: 28 },
      ],
    },
  },
];

const generateNextId = () => Math.max(...products.map((product) => product.id)) + 1;

const createProduct = (newProduct, newSizes) => {
  const id = generateNextId();

  products = [{ ...newProduct, id, favorites: 0 }, ...products];
  sizes = [...newSizes.map((newSize) => ({ ...newSize, id })), ...sizes];
};

const changeFavorite = (id, isFavorite) => {
  const delta = isFavorite ? 1 : -1;

  products = products.map((product) =>
    product.id === id ? { ...product, favorites: product.favorites + delta } : product
  );
};

const getProducts = () => products;
const getProductSizes = () => sizes;

module.exports = { createProduct, getProducts, getProductSizes, changeFavorite };
