// Course.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from "typeorm";
import { Subject } from "./Subject";
import { Student } from "./Student";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Subject, subject => subject.course)
    subject: Subject;

    @ManyToMany(() => Student, student => student.coursesTaken)
    studentsEnrolled: Student[];
}
