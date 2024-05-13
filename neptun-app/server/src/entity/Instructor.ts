import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Subject } from "./Subject";

@Entity()
export class Instructor {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    department!: string;

    @Column({ nullable: true })
    email!: string;

    @OneToMany(() => Subject, subject => subject.instructor)
    subjectTaught!: Subject[];
}
