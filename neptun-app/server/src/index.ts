import { AppDataSource } from "./data-source";
import express from "express";
import { getRouter } from "./routes";
import { Instructor } from "./entity/Instructor";
import { User } from "./entity/User";
import { Subject } from "./entity/Subject";
import { Grade } from "./entity/Grade";
import { Student } from "./entity/Student";
import { Course } from "./entity/Course";

async function main() {
  try {
      await AppDataSource.initialize();

      const app = express();

      app.use(express.json());

      app.use('/api', getRouter());

      app.listen(3000, () => {
          console.log('Listening on port 3000 ...');
      });
  } catch (err) {
      console.error(err);
  }
    // try {
    //     await AppDataSource.initialize();

    //     // Először töröljük az összes meglévő kapcsolatot a Course és a Student között
    //     await AppDataSource.manager.query('DELETE FROM course_students_enrolled_student');

    //     // Minden kurzushoz hozzáadjuk az összes diákot
    //     const courses = await AppDataSource.manager.find(Course);
    //     const students = await AppDataSource.manager.find(Student);

    //     for (const course of courses) {
    //         course.studentsEnrolled = students;
    //         await AppDataSource.manager.save(course);
    //     }

    //     // Minden diákhoz hozzáadjuk az összes kurzust
    //     for (const student of students) {
    //         student.coursesTaken = courses;
    //         await AppDataSource.manager.save(student);
    //     }

    //     console.log("A Course és Student közötti kapcsolatok újrainicializálása sikeresen megtörtént.");

    //     // Adatforrás lezárása
    //     AppDataSource.destroy();
    // } catch (error) {
    //     console.error("Hiba történt a kapcsolatok újrainicializálása közben:", error);
    //     AppDataSource.destroy();
    // }
}

main();


// AppDataSource.initialize().then(async () => {
    
//     // const user = new User();
//     // user.firstName = "Teszt";
//     // user.lastName = "Elek";
//     // user.email = "asd@adcs";
//     // user.password = "123";
//     // await AppDataSource.manager.save(user);
//     // console.log("User saved");
//     // AppDataSource.destroy();

//     try {
//       // Példány létrehozása és feltöltése adatokkal
//       const instructor = new Instructor();
//       instructor.name = "Kovács János";
//       instructor.email = "kovacs.janos@gmail.com";
//       instructor.department = "Magyar Nyelv és Irodalom tanszék";

//       const subject1 = new Subject();
//       subject1.name = "Magyar Nyelv";
//       subject1.instructor = instructor;

//       const subject2 = new Subject();
//       subject2.name = "Irodalom";
//       subject2.instructor = instructor;
//       instructor.subjectTaught = [subject1, subject2];

//       const course1 = new Course();
//       course1.name = "Magyar Nyelv I.";
//       course1.subject = subject1;

//       const course2 = new Course();
//       course2.name = "Irodalom I.";
//       course2.subject = subject2;

//       const student = new Student();
//       student.name = "Kis Péter";
//       student.group = "A";

//       const grade1 = new Grade();
//       grade1.grade = 4; // Példa érdemjegy
//       grade1.course = course1;
//       grade1.student = student;

//       // Példányok mentése az adatbázisba
//       await AppDataSource.manager.save(instructor);
//       await AppDataSource.manager.save(subject1);
//       await AppDataSource.manager.save(subject2);
//       await AppDataSource.manager.save(course1);
//       await AppDataSource.manager.save(course2);
//       await AppDataSource.manager.save(student);
//       await AppDataSource.manager.save(grade1);

//       console.log("Adatok sikeresen mentve az adatbázisba.");

//       // Adatforrás lezárása
//       AppDataSource.destroy();
//   } catch (error) {
//       console.error("Hiba történt az adatok mentése közben:", error);
//       AppDataSource.destroy();
//   }

// }).catch(error => {
//     console.log(error);
//     AppDataSource.destroy();
// });