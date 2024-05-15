import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Course } from "./Course";
import { Grade } from "./Grade";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    group!: string;

    // @ManyToMany(() => Course, course => course.studentsEnrolled)
    // @JoinTable({ name: 'course_students_enrolled_student' })
    @ManyToMany(type => Course, { cascade: true })
    @JoinTable()
    coursesTaken!: Course[];

    @OneToMany(() => Grade, grade => grade.student)
    grades!: Grade[];
}
