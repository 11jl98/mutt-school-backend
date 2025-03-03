const getConfiguration = () => ({
  NODE_ENV: process.env.NODE_ENV || 'development',
  port: process.env.PORT,

  database: {
    dialect: process.env.DIALECT as any,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  },
});
export default getConfiguration;
export type Configuration = ReturnType<typeof getConfiguration>;
