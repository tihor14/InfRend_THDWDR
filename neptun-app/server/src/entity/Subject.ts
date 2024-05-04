import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Instructor } from "./Instructor";
import { Course } from "./Course";

@Entity()
export class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Instructor, instructor => instructor.subjectTaught, {cascade: true})
    instructor: Instructor;

    @OneToMany(() => Course, course => course.subject, {cascade: true})
    course: Course[];
}
