module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        socketPath: env('CLOUD_SQL_SOCKET'),
        database: env('CLOUD_SQL_NAME'),
        username: env('CLOUD_SQL_USERNAME'),
      },
      options: {
        "pool": {
          "min": 0,
          "max": 50,
          "createTimeoutMillis": 30000,
          "acquireTimeoutMillis": 30000,
          "idleTimeoutMillis": 30000,
          "reapIntervalMillis": 1000,
          "createRetryIntervalMillis": 100,
        },
      },
    },
  },
})
