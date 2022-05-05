module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      socketPath: env('CLOUD_SQL_SOCKET', ''),
      database: env('CLOUD_SQL_NAME', ''),
      user: env('CLOUD_SQL_USERNAME', ''),
      password: env('CLOUD_SQL_PASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
