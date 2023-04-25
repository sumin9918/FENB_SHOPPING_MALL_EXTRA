const { v4: uuidv4 } = require("uuid");

// Mock data
let users = [
  {
    email: "test@test.com",
    password: "test123",
    name: "이동규",
    phone: "010-1234-5678",
    addresses: [
      {
        id: 1,
        name: "이동규",
        phone: "010-1234-5678",
        mainAddress: "서울시 동작구 12길 28",
        detailAddress: "235호",
        postcode: "120156",
        isDefault: true,
      },
      {
        id: 2,
        name: "최수민",
        phone: "010-3456-5678",
        mainAddress: "서울시 강남구 역삼로 15길 7",
        detailAddress: "휴앤아이빌 309호",
        postcode: "098762",
        isDefault: false,
      },
      {
        id: 3,
        name: "김경재",
        phone: "010-0987-5555",
        mainAddress: "서울시 강남구 강남대로 364(역삼동)",
        detailAddress: "미왕빌딩 10층 E강의실",
        postcode: "348523",
        isDefault: false,
      },
    ],
  },
];

const defaultUser = {
  email: "",
  password: "",
  name: "",
  phone: "",
  addresses: [],
};

const defaultAddress = {
  id: null,
  recipient: "",
  recipientPhone: "",
  mainAddress: "",
  detailAddress: "",
  postcode: "",
  isDefault: true,
};

const createUser = ({
  email,
  name,
  phone,
  password,
  mainAddress,
  detailAddress,
  postcode,
}) => {
  users = [
    {
      ...defaultUser,
      email,
      password,
      name,
      phone,
      addresses: [
        {
          ...defaultAddress,
          ...address,
          id: uuidv4(),
          recipient: name,
          recipientPhone: phone,
          isDefault: true,
        },
      ],
    },
    ...users,
  ];
};

// 추가
const addAddress = (email, newAddress) => {
  const id = uuidv4();
  const isDefault = users.length === 0;

  users = users.map((user) =>
    user.email === email
      ? {
          ...user,
          addresses: [{ id, ...newAddress, isDefault }, ...user.addresses],
        }
      : user
  );

  return id;
};

// 기본 배송지 변경
const changeDefaultAddress = (email, addressId) =>
  (users = users.map((user) => {
    if (user.email === email) {
      const changedAddress = user.addresses.map((address) => ({
        ...address,
        isDefault: address.id === addressId,
      }));

      return {
        ...user,
        addresses: [
          ...changedAddress.filter((address) => address.id === addressId),
          ...changedAddress.filter((address) => address.id !== addressId),
        ],
      };
    }

    return user;
  }));

const editAddress = (email, id, newAddress) => {
  users = users.map((user) =>
    user.email === email
      ? {
          ...user,
          addresses: user.addresses.map((address) =>
            address.id === id ? { ...address, ...newAddress } : address
          ),
        }
      : user
  );
};

const getUsers = () => users;

const getUser = (email) => users.find((user) => user.email === email);

const confirmUser = (email, password) =>
  users.find((user) => user.email === email && user.password === password);

const hasUser = (email, password) =>
  users.some((user) => user.email === email && user.password === password);

const checkDuplicateEmail = (inputEmail) =>
  users.some((user) => user.email === inputEmail);

module.exports = {
  createUser,
  addAddress,
  hasUser,
  getUsers,
  getUser,
  confirmUser,
  checkDuplicateEmail,
  changeDefaultAddress,
  editAddress,
};
