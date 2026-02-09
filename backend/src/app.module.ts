/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './database/data-source/data-source';
import { AuthenticationModule } from './authentication/authentication.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({...dataSourceOptions}),
    AuthenticationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}