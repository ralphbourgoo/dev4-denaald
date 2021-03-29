module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'ID282051_denaald.db.webhosting.be'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'ID282051_denaald'),
        username: env('DATABASE_USERNAME', 'ID282051_denaald'),
        password: env('DATABASE_PASSWORD', 'denaald123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
