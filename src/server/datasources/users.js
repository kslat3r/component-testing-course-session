const { MOCK_SERVER, MOCK_PORT } = process.env;

module.exports = {
  name: 'users',
  crud: true,
  connector: 'rest',
  operations: [
    {
      functions: {
        listDS: []
      },
      template: {
        method: 'GET',
        url: MOCK_SERVER && MOCK_PORT ? `http://${MOCK_SERVER}:${MOCK_PORT}/users` : 'https://jsonplaceholder.typicode.com/users'
      }
    },
    {
      functions: {
        getDS: [
          'userId'
        ]
      },
      template: {
        method: 'GET',
        url: MOCK_SERVER && MOCK_PORT ? `http://${MOCK_SERVER}:${MOCK_PORT}/users/{userId}` : 'https://jsonplaceholder.typicode.com/users/{userId}'
      }
    }
  ]
};
