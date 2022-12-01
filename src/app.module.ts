import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { SongsModule } from './songs/songs.module';
//import { CervezaModule } from './cervezas/cerveza.module';
import { CervezasModule } from './cervezas/cervezas.module';

@Module({
  imports: [
    CervezasModule,//
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'bdcerveza',
      synchronize: true,
      autoLoadEntities: true,
    }),
    SongsModule,
    //CervezaModule,
    //CervezasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
