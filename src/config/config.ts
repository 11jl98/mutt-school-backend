const getConfiguration = () => ({
  NODE_ENV: process.env.NODE_ENV || 'development',
  port: process.env.PORT,

  databaseUrl: process.env.DATABASE_URL,
});
export default getConfiguration;
export type Configuration = ReturnType<typeof getConfiguration>;
