import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() export class Cerveza {
    @PrimaryGeneratedColumn() id:number;
    @Column() nombre:string;
    @Column() tipo:string;
    @Column() precio:number;

}
