import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


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
}
