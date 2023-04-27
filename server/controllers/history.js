const defaultHistory = {
  email: '',
  purchases: [],
};

let history = [
  {
    email: 'test@test.com',
    purchases: [],
  },
];

const createUser = email => {
  history = [{ ...defaultHistory, email }, ...history];
};

const getHistory = email => history.find(user => user.email === email);

const addHistory = (email, newHistory) => {
  history = history.map(user =>
    user.email === email ? { ...user, purchases: [{ orderDate: new Date(), ...newHistory }, ...user.purchases] } : user
  );
};

module.exports = { createUser, getHistory, addHistory };
