export interface CourseDTO{
    id: number;
    name: string;
    subject: null | SubjectDTO;
    studentsEnrolled: null | StudentDTO[];
}
export interface GradeDTO{
    id: number;
    student: null | StudentDTO;
    course: string;
    grade: number;
}
export interface InstructorDTO{
    id: number;
    name: string;
    department: string;
    email: null | string;
    subjectTaught: null | SubjectDTO[];
}
export interface StudentDTO{
    id: number;
    name: string;
    group: string;
    coursesTaken: null | CourseDTO[];
    grades: null | GradeDTO[];
}
export interface SubjectDTO{
    id: number;
    name: string;
    instructor: null | InstructorDTO;
    course: null | CourseDTO[];
}
export interface UserDTO {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string | null;
  }