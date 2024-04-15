import * as path from 'path';
import { DataSource } from 'typeorm';
import { Post } from './entities/post.entity';
import { PostSeed1713112741321 } from './migrations/1713112741321-PostSeed';
export const root: string = path.resolve(__dirname, '..');

export const sqlLiteTypeOrmDataSource = new DataSource({
  type: 'sqlite',
  database: `${root}/post.sqlite`,
  entities: [Post],
  synchronize: true,
  logging: true,
  migrations: [PostSeed1713112741321],
  migrationsRun: true, // Set to false the first time
});
