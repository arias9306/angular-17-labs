import { Post } from '@angular-17-labs/db-typeOrm';
import { Logger, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { TypeOrmModuleModule } from '../type-orm-module.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

export const postsProviders = [
  {
    provide: 'POSTS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Post),
    inject: ['DATA_SOURCE'],
  },
];

@Module({
  imports: [TypeOrmModuleModule],
  providers: [...postsProviders, PostsService, Logger],
  controllers: [PostsController],
})
export class PostsModule {}
