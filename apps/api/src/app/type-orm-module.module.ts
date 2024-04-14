import { sqlLiteTypeOrmDataSource } from '@angular-17-labs/db-typeOrm';
import { Module } from '@nestjs/common';

const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return sqlLiteTypeOrmDataSource.initialize();
    },
  },
];

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class TypeOrmModuleModule {}
