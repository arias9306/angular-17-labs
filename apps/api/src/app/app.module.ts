import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModuleModule } from './type-orm-module.module';

@Module({
  imports: [TypeOrmModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
