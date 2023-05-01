const getDateAfter = number => {
  const date = new Date();
  date.setDate(date.getDate() + number);

  return date;
};

module.exports = { getDateAfter };
