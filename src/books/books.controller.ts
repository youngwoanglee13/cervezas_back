import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { BooksService } from "./books.service";

@Controller('books') // PREFIJO DE PATH OPCIONAL
export class BooksController {
  constructor(private booksService: BooksService) {
  }
  @Get() // PATH OPCIONAL
  findAll(): string {
    return 'Esta accion retorna todos los libros';
  }
  @Post()
  create(@Body() createBookDto: CreateBookDto){
    // return createBookDto;
    return this.booksService.create(createBookDto);
  }
}

//ENDPOINT
//GET  PREFIJO DE PATH OPCIONAL + PATH OPCIONAL
