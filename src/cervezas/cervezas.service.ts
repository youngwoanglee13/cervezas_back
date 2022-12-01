import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCervezaDto } from './dto/create-cerveza.dto';
import { UpdateCervezaDto } from './dto/update-cerveza.dto';
import { Cerveza } from './entities/cerveza.entity';

@Injectable()
export class CervezasService {
  constructor(@InjectRepository(Cerveza)private cervezarepository:Repository<Cerveza>){

  }
  create(createCervezaDto: CreateCervezaDto) {
    return this.cervezarepository.save(createCervezaDto);
  }

  findAll() {
    return this.cervezarepository.find();
  }

  findOne(id: number) {
    return this.cervezarepository.findOneBy({id});
  }

  update(id: number, updateCervezaDto: UpdateCervezaDto) {
    return this.cervezarepository.update({id},updateCervezaDto);
  }

  remove(id: number) {
    return this.cervezarepository.delete({id});
  }
}
