import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { BookEntity, SyncLogEntity } from '@/entities';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'dargohbook',
  synchronize: true,
  logging: process.env.NODE_ENV === 'development',
  entities: [BookEntity, SyncLogEntity],
});

let initialized = false;

export async function getDataSource(): Promise<DataSource> {
  if (!initialized) {
    await AppDataSource.initialize();
    initialized = true;
    console.log('Database connection initialized');
  }
  return AppDataSource;
}

export async function getBookRepository() {
  const ds = await getDataSource();
  return ds.getRepository(BookEntity);
}

export async function getSyncLogRepository() {
  const ds = await getDataSource();
  return ds.getRepository(SyncLogEntity);
}
