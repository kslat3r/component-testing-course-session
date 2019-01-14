const { MOCK_SERVER } = process.env;

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
        url: MOCK_SERVER ? `http://${MOCK_SERVER}/users` : 'https://jsonplaceholder.typicode.com/users'
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
        url: MOCK_SERVER ? `http://${MOCK_SERVER}/users/{userId}` : 'https://jsonplaceholder.typicode.com/users/{userId}'
      }
    }
  ]
};
