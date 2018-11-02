module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  URL: process.env.BASE_URL || 'http://localhost:3000',
  MONGODB_URI:
    'mongodb://caleb:Elephant1!@ds243491.mlab.com:43491/fantasy-football',
  JWT_SECRET: process.env.JWT_SECRET || 'secret1'
};
