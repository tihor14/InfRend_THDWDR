import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Student } from "./Student";
import { Course } from "./Course";

@Entity()
export class Grade {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Student, student => student.grades)
    student: Student;

    @Column()
    course: Course;

    @Column()
    grade: number;
}
