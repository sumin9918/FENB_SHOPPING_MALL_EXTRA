const { v4: uuidv4 } = require('uuid');

let products = [
  {
    id: 1,
    favorites: 123,
    brand: 1,
    category: 0,
    gender: 0,
    name: '울트라 부스트 라이트1',
    price: 229000,
    color: 1,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2022-12'),
    feature: '신제품',
  },
  {
    id: 2,
    favorites: 124,
    brand: 1,
    category: 0,
    gender: 0,
    name: '울트라 부스트 라이트2',
    price: 229000,
    color: 2,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2022-12'),
    feature: '경우님이 강추',
  },
  {
    id: 3,
    favorites: 66,
    brand: 1,
    category: 0,
    gender: 0,
    name: '울트라 부스트 라이트3',
    price: 229000,
    color: 3,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2020-12'),
    feature: '경재님이 강추',
  },
  {
    id: 4,
    favorites: 30,
    brand: 6,
    category: 4,
    gender: 0,
    name: '울트라 부스트 라이트4',
    price: 229000,
    color: 4,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2019-12'),
    feature: '수민님이 강추',
  },
  {
    id: 5,
    favorites: 60,
    brand: 1,
    category: 0,
    gender: 0,
    name: '울트라 부스트 라이트5',
    price: 229000,
    color: 5,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2022-12'),
    feature: '동규님이 강추',
  },
  {
    id: 6,
    favorites: 70,
    brand: 1,
    category: 0,
    gender: 0,
    name: '울트라 부스트 라이트6',
    price: 229000,
    color: 6,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2012-12'),
    feature: '힘내세요',
  },
  {
    id: 7,
    favorites: 90,
    brand: 1,
    category: 0,
    gender: 0,
    name: '울트라 부스트 라이트7',
    price: 229000,
    color: 7,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2011-12'),
    feature: '맥도날드 햄버거 맛있다',
  },
  {
    id: 8,
    favorites: 12,
    brand: 1,
    category: 0,
    gender: 0,
    name: '울트라 부스트 라이트8',
    price: 229000,
    color: 8,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2022-12'),
    feature: '좋아요~',
  },
  {
    id: 9,
    favorites: 224,
    brand: 1,
    category: 0,
    gender: 1,
    name: '울트라 부스트 라이트9',
    price: 229000,
    color: 9,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2000-12'),
    feature: '돈까스 먹고싶네',
  },
  {
    id: 10,
    favorites: 13,
    brand: 1,
    category: 0,
    gender: 0,
    name: '울트라 부스트 라이트10',
    price: 229000,
    color: 10,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2022-12'),
    feature: '버거킹 마렵네',
  },
  {
    id: 11,
    favorites: 0,
    brand: 2,
    category: 1,
    gender: 1,
    name: '울트라 부스트 라이트11',
    price: 1090000,
    color: 1,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2019-12'),
    feature: '새우튀김은 영어로 쉬림프 프라이',
  },
  {
    id: 12,
    favorites: 13,
    brand: 2,
    category: 4,
    gender: 0,
    name: '울트라 부스트 라이트12',
    price: 140000,
    color: 9,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2022-10'),
    feature: '프론트엔드 개발자',
  },
  {
    id: 13,
    favorites: 13,
    brand: 7,
    category: 0,
    gender: 0,
    name: '울트라 부스트 라이트13',
    price: 229000,
    color: 10,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2021-12'),
    feature: '목업 서버에서 가져왔습니다.',
  },
  {
    id: 14,
    favorites: 13,
    brand: 6,
    category: 0,
    gender: 1,
    name: '울트라 부스트 라이트14',
    price: 130000,
    color: 10,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2017-12'),
    feature: '즐겁게 해보죠',
  },
  {
    id: 15,
    favorites: 13,
    brand: 10,
    category: 3,
    gender: 0,
    name: '울트라 부스트 라이트15',
    price: 190000,
    color: 10,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2022-12'),
    feature: '따뜻한 비빔면',
  },
  {
    id: 16,
    favorites: 13,
    brand: 9,
    category: 4,
    gender: 1,
    name: '울트라 부스트 라이트16',
    price: 90000,
    color: 10,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2022-12'),
    feature: 'chatGPT는 개발자의 밥그릇을 노린다',
  },
  {
    id: 17,
    favorites: 13,
    brand: 0,
    category: 2,
    gender: 0,
    name: '울트라 부스트 라이트17',
    price: 89000,
    color: 7,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2022-12'),
    feature: '서버 데이터가 힘드네요',
  },
  {
    id: 18,
    favorites: 13,
    brand: 5,
    category: 4,
    gender: 0,
    name: '울트라 부스트 라이트18',
    price: 150000,
    color: 6,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2022-12'),
    feature: '버스는 영어로 버스',
  },
  {
    id: 19,
    favorites: 0,
    brand: 1,
    category: 4,
    gender: 1,
    name: '울트라 부스트 라이트19',
    price: 49000,
    color: 5,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2022-12'),
    feature: '택시는 영어로 택시',
  },
  {
    id: 20,
    favorites: 13,
    brand: 3,
    category: 3,
    gender: 0,
    name: '울트라 부스트 라이트20',
    price: 90000,
    color: 2,
    imgURL: 'https://via.placeholder.com/440x440',
    description:
      '더욱 가볍게 돌아온 아디다스 울트라부스트와 함께 매 스텝이 날아오르는 역대급 러닝 에너지를 느껴보세요. 독보적인 분자 형태의 캡슐 디자인을 통해 탄생한 초경량 폼으로 기존의 부스트보다 가볍게 진화한 라이트 부스트 미드솔을 선보입니다. 달릴 때마다 에너지가 폭발하는 수백 개의 부스트 캡슐로 이제까지와는 차원이 다른 궁극의 쿠셔닝과 편안함을 제공합니다.',
    dateOfManufacture: new Date('2022-12'),
    feature: '아디다스는 영어로 아디다스',
  },
];

// const generateNextId = () => Math.max(...products.map((product) => product.id)) + 1;

// const createProduct = (newProduct) => {
//   products = [{ id: generateNextId(), favorites: 0, ...newProduct }, ...products];
// };

const getProducts = () => products;

const findProduct = id => products.find(product => product.id === id);

const toggleProductFavorite = (id, isFavorite) => {
  const delta = isFavorite ? -1 : 1;

  products = products.map(product =>
    product.id === id ? { ...product, favorites: product.favorites + delta } : product
  );
};

module.exports = { findProduct, getProducts, toggleProductFavorite };
