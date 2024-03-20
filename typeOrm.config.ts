import {config} from 'dotenv';
import {DataSource} from 'typeorm';

config();

// TODO: connect it with @nestjs/config instead of using dotenv
export default new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT ?? 5432),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ['src/**/*.entity.ts'],
  synchronize: false,
});
