const makeCipher = ({ email, password, name, phone }) => {
  const cipherEmail = email
    .split('@')
    .map((str, idx) =>
      idx === 0 ? str.replace(/(.)(.*)(.)/, (match, p1, p2, p3) => p1 + '*'.repeat(p2.length) + p3) : str
    )
    .join('@');
  const cipherPassword = '*'.repeat(password);
  const cipherName = name.replace(/(.)(.*)(.)/, (match, p1, p2, p3) => p1 + '*'.repeat(p2.length) + p3);
  const cipherPhone = phone
    .split('-')
    .map((str, idx) => (idx === 0 ? str : idx === 1 ? '*'.repeat(str.length) : `*${str.slice(1)}`))
    .join('-');

  return { email: cipherEmail, password: cipherPassword, name: cipherName, phone: cipherPhone };
};

export default makeCipher;
