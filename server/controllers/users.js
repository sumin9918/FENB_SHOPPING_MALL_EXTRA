// Mock data
let users = [
  {
    email: "test@test.com",
    password: "test123",
    name: "이동규",
    favoriteIds: [2, 3, 4],
  },
];

const defaultUser = {
  email: "",
  password: "",
  name: "",
  favoriteIds: [],
};

const createUser = (email, password, name) => {
  users = [{ ...defaultUser, email, password, name }, ...users];
};

const addFavoriteId = (id, favorite, decode) => {
  users = users.map((user) =>
    user.email === decode.email
      ? {
          ...user,
          favoriteIds: favorite
            ? [id, ...user.favoriteIds]
            : user.favoriteIds.filter((favoriteId) => favoriteId !== id),
        }
      : user
  );
};

const findUser = (email, password) =>
  users.find((user) => user.email === email && user.password === password);

const getUsers = () => users;

module.exports = { createUser, addFavoriteId, findUser, getUsers };
