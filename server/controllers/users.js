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
        id: uuidv4(),
        recipient: "이동규",
        recipientPhone: "010-1234-5678",
        mainAddress: "서울시 동작구 12길 28",
        detailAddress: "235호",
        postcode: "120156",
        isDefault: true,
      },
      {
        id: uuidv4(),
        recipient: "최수민",
        recipientPhone: "010-3456-5678",
        mainAddress: "서울시 강남구 역삼로 15길 7",
        detailAddress: "휴앤아이빌 309호",
        postcode: "098762",
        isDefault: false,
      },
      {
        id: uuidv4(),
        recipient: "김경재",
        recipientPhone: "010-0987-5555",
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

// 신규 회원가입 유저 정보 추가
const createUser = ({ email, name, phone, password, ...address }) => {
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

const hasAddress = (email, id) =>
  users.some(
    (user) =>
      user.email === email &&
      user.addresses.some((address) => address.id === id)
  );

// 추가
const addAddress = (email, { isDefault = false, ...address }) => {
  const id = uuidv4();
  const newAddress = {
    id,
    isDefault:
      isDefault ??
      users.find((user) => user.email === email).addresses.length === 0,
    ...address,
  };

  users = users.map((user) =>
    user.email === email
      ? {
          ...user,
          addresses: [newAddress, ...user.addresses],
        }
      : user
  );

  return id;
};

// 기본 배송지 변경
const changeDefaultAddress = (email, addressId) => {
  users = users.map((user) =>
    user.email === email
      ? {
          ...user,
          addresses: user.addresses.map((address) => ({
            ...address,
            isDefault: address.id === addressId,
          })),
        }
      : user
  );
};

// 기본 배송지는 배열 맨앞으로 이동
const moveFrontDefaultAddress = (email, addressId) => {
  users = users.map((user) =>
    user.email === email
      ? {
          ...user,
          addresses: [
            user.addresses.find((address) => address.isDefault),
            ...user.addresses.filter((address) => !address.isDefault),
          ],
        }
      : user
  );
};

// 배송지 수정
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

// 배송지 삭제
const deleteAddress = (email, id) => {
  users = users.map((user) =>
    user.email === email
      ? {
          ...user,
          addresses: user.addresses.filter((address) => address.id !== id),
        }
      : user
  );
};

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
  hasAddress,
  getUser,
  confirmUser,
  checkDuplicateEmail,
  changeDefaultAddress,
  moveFrontDefaultAddress,
  editAddress,
  deleteAddress,
};
