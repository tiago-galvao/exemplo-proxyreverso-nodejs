const env = process.env.NODE_ENV || 'development';

const configs = {
  development: require('./dev'),
  homologation: require('./homol'),
  production: require('./prod')
};

export default configs[env];