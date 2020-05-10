const faker = require('faker');
exports.newFakePlayer = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  avatar: faker.image.avatar(),
  country: faker.address.country(),
  phone: faker.phone.phoneNumber(),
  birthday: faker.date.past(),
  visits: faker.date.recent(),
});
