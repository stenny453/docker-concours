module.exports = {
    // factories: ['src/factories/**/*{.ts,.js}'],
    type: 'mysql',
    // type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    seeds: ['seeders/**/*{.ts,.js}'],
}