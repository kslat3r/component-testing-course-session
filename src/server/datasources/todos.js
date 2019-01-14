const { MOCK_SERVER } = process.env;

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
        url: MOCK_SERVER ? `http://${MOCK_SERVER}/todos` : 'https://jsonplaceholder.typicode.com/todos',
        query: {
          userId: '{userId}'
        }
      }
    }
  ]
};
