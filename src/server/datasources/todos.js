const { MOCK_SERVER, MOCK_PORT } = process.env;

module.exports = {
  name: 'todos',
  crud: true,
  connector: 'rest',
  operations: [
    {
      functions: {
        listDS: [
          'userId'
        ]
      },
      template: {
        method: 'GET',
        url: MOCK_SERVER && MOCK_PORT ? `http://${MOCK_SERVER}:${MOCK_PORT}/todos` : 'https://jsonplaceholder.typicode.com/todos',
        query: {
          userId: '{userId}'
        }
      }
    }
  ]
};
