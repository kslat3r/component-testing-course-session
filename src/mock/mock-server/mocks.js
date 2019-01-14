const todosUserStub = require('./stubs/todos-user');
const todosStub = require('./stubs/todos');
const userStub = require('./stubs/user');
const usersStub = require('./stubs/users');

module.exports = [
  {
    hostname: process.env.MOCK_SERVER,
    port: process.env.MOCK_PORT,
    stubs: [
      todosUserStub,
      todosStub,
      userStub,
      usersStub
    ]
  }
];
