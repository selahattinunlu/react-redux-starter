const environment = process.env.NODE_ENV || 'development';
const filename = `./env.${environment}.json`;
const env = require(filename);

export default env;