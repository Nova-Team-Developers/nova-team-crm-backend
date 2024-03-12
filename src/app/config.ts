export default () => ({
  serverPort: Number(process.env.SERVER_PORT),

  postgresHost: process.env.POSTGRES_HOST,
  postgresPort: Number(process.env.POSTGRES_PORT || 5432),
  postgresUser: process.env.POSTGRES_USER,
  postgresPassword: process.env.POSTGRES_PASSWORD,
  postgresDatabase: process.env.POSTGRES_DATABASE,
});
