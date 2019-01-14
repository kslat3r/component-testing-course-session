const fs = require('fs');
const path = require('path');

const isDatasourceFile = file => file.endsWith('.js') && !file.endsWith('.spec.js');

module.exports = (app, location) => {
  fs.readdirSync(location)
    .filter(isDatasourceFile)
    .forEach((file) => {
      const datasource = require(path.resolve(location, file));

      app.dataSource(datasource.name, datasource);
    });
};
