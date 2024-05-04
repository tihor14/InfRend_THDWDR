// Course.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, OneToMany } from "typeorm";
import { Subject } from "./Subject";
import { Student } from "./Student";
import { Grade } from "./Grade";

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Subject, subject => subject.course , { onDelete: 'CASCADE' , eager: true})
    subject: Subject;

    @ManyToMany(() => Student, student => student.coursesTaken, { eager: true })
    studentsEnrolled: Student[];
    
    @OneToMany(() => Grade, grade => grade.course, { cascade: true })
    grades: Grade[];
}
