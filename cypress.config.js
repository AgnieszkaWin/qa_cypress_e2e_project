const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');
const { clear } = require('./server/db');
// eslint-disable-next-line import/first
// const { seed } = require('./server/db');
// const {
//   addMatchImageSnapshotPlugin
// } = require('cypress-image-snapshot/plugin');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:1667/',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.ceil(Math.random(1000) * 1000);
          return {
            // username: 'kgfhdkgnkdjgjdkgjk',
            // email: 'kgfhdkgnkdjgjdkgjk@mail.com',
            // password: '12345Qwert!',
            // updateUsername: 'xghfghgfhfghfghdfhgfshdf',
            // updateEmail: 'dfzghdfhfdhhfdh@mail.com',
            // bio: 'dfgdfghfdghdfgsdf',
            // updatePassword: 'Password6789$'
            username: faker.internet.userName() + `${randomNumber}`,
            email: faker.internet.email(),
            password: '12345Qwert!',
            updateUsername: faker.internet.userName() + `${randomNumber}`,
            updateEmail: faker.lorem.word() + `${randomNumber}` + '@mail.com',
            bio: faker.lorem.word(),
            updatePassword: 'Password6789$'
          };
        },

        generateArticle() {
          return {
            title: faker.lorem.word(),
            description: faker.lorem.words(),
            body: faker.lorem.words(),
            tag: faker.lorem.word()
          };
        },
        'db:clear': async () => {
          await clear();
          return null;
        }
        // 'db:seed'() {
        //   seed();

        //   return null;
        // }
      });
      // addMatchImageSnapshotPlugin(on, config);
    }
  }
});
