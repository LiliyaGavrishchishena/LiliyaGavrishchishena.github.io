const faker = require('faker');

const generateList = n => {
  const data = [];
  for (i = 0; i <= n; i++) {
    data.push({
      id: i + 1,
      name: faker.name.findName(),
      email: faker.internet.email(),
      funds: faker.finance.amount(),
      city: faker.address.city(),
      phone: faker.phone.phoneNumber()
    });
  }
  return data;
};

module.exports = generateList;
