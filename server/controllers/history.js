const { v4: uuidv4 } = require('uuid');

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

const getHistory = email => history.find(user => user.email === email).purchases;

const getLatestHistory = email => history.find(user => user.email === email).purchases[0];

const addHistory = (email, newHistory) => {
  history = history.map(user =>
    user.email === email
      ? { ...user, purchases: [{ id: uuidv4(), orderDate: new Date(), ...newHistory }, ...user.purchases] }
      : user
  );
};

module.exports = { createUser, getHistory, getLatestHistory, addHistory };
