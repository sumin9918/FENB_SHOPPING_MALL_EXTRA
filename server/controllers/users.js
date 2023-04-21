// Mock data
let users = [
  {
    email: 'test@test.com',
    password: 'test123',
    name: '이동규',
    phoneNumber: '010-1234-5678',
    addresses: [
      {
        mainAddress: '서울시 동작구 12길 28',
        detailAddress: '103호',
        postcode: '120156',
      },
    ],
  },
];

const defaultUser = {
  email: '',
  password: '',
  name: '',
  phone: '',
  addresses: [],
};

const defaultAddress = {
  mainAddress: '',
  detailAddress: '',
  postcode: '',
};

const createUser = ({ email, name, phone, password, mainAddress, detailAddress, postcode }) => {
  users = [
    {
      ...defaultUser,
      email,
      password,
      name,
      phone,
      addresses: [{ ...defaultAddress, mainAddress, detailAddress, postcode }],
    },
    ...users,
  ];
};

// 수정
const addAddress = ({ email, address }) => {
  users = users.map((user) =>
    user.email === email
      ? {
          ...user,
          addresses: [address, ...user.addresses],
        }
      : user
  );
};

const getUsers = () => users;
const getUser = (email) => users.find((user) => user.email === email);

const hasUser = (email, password) => users.some((user) => user.email === email && user.password === password);

const checkDuplicateEmail = (inputEmail) => users.some((user) => user.email === inputEmail);

module.exports = {
  createUser,
  addAddress,
  hasUser,
  getUsers,
  getUser,
  checkDuplicateEmail,
};
