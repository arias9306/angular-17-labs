import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModuleModule } from './type-orm-module.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [TypeOrmModuleModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
