import * as path from 'path';
import { DataSource } from 'typeorm';
import { Post } from './entities/post.entity';
export const root: string = path.resolve(__dirname, '..');

export const sqlLiteTypeOrmDataSource = new DataSource({
  type: 'sqlite',
  database: `${root}/post.sqlite`,
  entities: [Post],
  synchronize: true,
  logging: true,
});
