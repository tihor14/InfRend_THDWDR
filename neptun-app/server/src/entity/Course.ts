// Course.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, OneToMany, JoinTable } from "typeorm";
import { Subject } from "./Subject";
import { Student } from "./Student";
import { Grade } from "./Grade";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @ManyToOne(() => Subject, subject => subject.course , {eager: true})
    @JoinTable()
    subject!: Subject;

    // @ManyToMany(() => Student, student => student.coursesTaken, { eager: true })
    // @JoinTable({ name: 'course_students_enrolled_student' })
    // studentsEnrolled!: Student[];
    
    @OneToMany(() => Grade, grade => grade.course)
    grades!: Grade[];
}
