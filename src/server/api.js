const loopback = require('loopback');
const http = require('http');
const createDatasources = require('./helpers/create-datasources');

const app = loopback();

createDatasources(app, `${__dirname}/datasources`);

app.start = (httpOnly) => {
  const port = app.get('port');
  const host = app.get('host');
  const server = http.createServer(app);

  server.listen(port, host, () => {
    app.emit('started');
  });

  return server;
};

module.exports = app;
