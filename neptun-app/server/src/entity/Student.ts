import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import { Course } from "./Course";
import { Grade } from "./Grade";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    group: string;

    @ManyToMany(() => Course, course => course.studentsEnrolled, {cascade: true})
    coursesTaken: Course[];

    @OneToMany(() => Grade, grade => grade.student, {cascade: true})
    grades: Grade[];
}
