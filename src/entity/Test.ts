import { Entity, PrimaryColumn, Generated, Column } from 'typeorm';

@Entity("test")
export class Test {

    @PrimaryColumn()
    @Generated()
    id: number;

    @Column()
    test: string;

}