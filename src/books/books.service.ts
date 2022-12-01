import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BookInterface } from './interfaces/book.interface';
import { InjectRepository } from "@nestjs/typeorm";
import { Book } from "./entities/book.entity";
import { Repository } from "typeorm";

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private bookRepository: Repository<Book>) {
  }
  create(createBookDto: CreateBookDto){
    return this.bookRepository.save(createBookDto);
  }
}
