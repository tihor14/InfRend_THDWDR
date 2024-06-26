import express from 'express';
import { UserController } from './controller/user.controller';
import { CourseController } from './controller/course.controller';
import { GradeController } from './controller/grade.controller';
import { InstructorController } from './controller/instructor.controller';
import { StudentController } from './controller/student.controller';
import { SubjectController } from './controller/subject.controller';

export function getRouter() {
    const router = express.Router();
    const courseController = new CourseController();
    const gradeController = new GradeController();
    const instructorController = new InstructorController();
    const studentController = new StudentController();
    const subjectController = new SubjectController();
    const userController = new UserController();

    router.get('/user', userController.getAll);
    router.get('/user/:id', userController.getOne);
    // router.get('/user/filteredBy', userController.getAllFiltered);
    router.post('/user', userController.create);
    router.put('/user', userController.update);
    //router.delete('/user/:id', userController.delete);

    router.get('/course', courseController.getAll);
    router.get('/course/:id', courseController.getOne);
    // router.get('/course/filteredBy', courseController.getAllFiltered);
    router.get('/course/list-by/:subjectId', courseController.coursesOfSubject);
    router.get('/course/learned-by/:studentId', courseController.getCoursesOfStudent);
    router.get('/course/students/:courseId', courseController.getCoursesOfStudent);
    router.post('/course', courseController.create);
    router.put('/course', courseController.update);
    router.delete('/course/:id', courseController.delete);

    router.get('/grade', gradeController.getAll);
    router.get('/grade/:id', gradeController.getOne);
    // router.get('/grade/filteredBy', gradeController.getAllFiltered);
    router.post('/grade', gradeController.create);
    // router.get('/grade/averageByCourse/:courseId', gradeController.getAverageGradeByCourse);
    // router.get('/grade/averageByStudent', gradeController.getAverageGradeByStudent);
    //router.delete('/grade/:id', gradeController.delete);

    router.get('/instructor', instructorController.getAll);
    router.get('/instructor/:id', instructorController.getOne);
    // router.get('/instructor/filteredBy', instructorController.getAllFiltered);
    router.post('/instructor', instructorController.create);
    router.put('/instructor', instructorController.update);
    router.delete('/instructor/:id', instructorController.delete);

    router.get('/student', studentController.getAll);
    router.get('/student/:id', studentController.getOne);
    // router.get('/student/filteredBy', studentController.getAllFiltered);
    router.post('/student', studentController.create);
    router.put('/student', studentController.update);
    router.delete('/student/:id', studentController.delete);

    router.get('/subject', subjectController.getAll);
    router.get('/subject/taught-by/:instructorId', subjectController.subjectsOfInstructor);
    // router.get('/subject/list-by/:subjectId', subjectController.coursesOfSubject);
    // router.get('/subject/filteredBy', subjectController.getAllFiltered);
    router.post('/subject', subjectController.create);
    router.delete('/subject/:id', subjectController.delete);

    
    return router;
}