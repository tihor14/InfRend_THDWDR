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

      app.listen(3000, async () => {
          console.log('Listening on port 3000 ...');
          await createTablesIfNotExist(); // Tábla létrehozása, ha még nem létezik
      });
  } catch (err) {
      console.error(err);
  }
}

main();

async function createTablesIfNotExist() {
  const tableExistsQuery = `SELECT COUNT(*) as count FROM information_schema.tables WHERE table_schema = 'neptunDB2' AND table_name = 'user';`;

  try {
    const result = await AppDataSource.query(tableExistsQuery);
    const count = result[0].count;

    if (count === 0) {
      // Tábla még nem létezik, létrehozzuk
      await AppDataSource.query(""/* create table query */);
    }
  } catch (error) {
    console.error('Error checking if table exists:', error);
  }
}
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