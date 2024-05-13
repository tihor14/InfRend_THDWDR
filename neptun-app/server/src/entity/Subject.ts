import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinTable } from "typeorm";
import { Instructor } from "./Instructor";
import { Course } from "./Course";

@Entity()
export class Subject {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @ManyToOne(() => Instructor, instructor => instructor.subjectTaught, {eager: true})
    @JoinTable()
    instructor!: Instructor;

    @OneToMany(() => Course, course => course.subject)
    course!: Course[];
}
