import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { nullable } from "zod";


@Entity('clients')
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {length: '60'})
    name: string;

    @Column('varchar')
    email: string;

    @Column('varchar', {length: '60'})
    street: string;

    @Column('varchar', {length: '10'})
    postcode: string;

    @Column('varchar', {length: '30'})
    city: string;

    @Column('varchar', {length: '2000'})
    notes: string;
}
