import { AppDataSource } from "./data-source";
import express from "express";
import { getRouter } from "./routes";
import { Instructor } from "./entity/Instructor";

AppDataSource.initialize().then(async () => {
    const instructor = new Instructor();
    instructor.name = "Teszt";
    instructor.department = "Valahol";
    instructor.email = "asd@gmail.com";
    

    await AppDataSource.manager.save(instructor);
    console.log("Instructor is saved.");

    AppDataSource.destroy();
}).catch(error => {
    console.log(error);
    AppDataSource.destroy();
});

// async function main() {
//     try {
//         await AppDataSource.initialize();

//         const app = express();

//         app.use(express.json());

//         app.use('/api', getRouter());

//         app.listen(3000, () => {
//             console.log('Listening on port 3000 ...');
//         });
//     } catch (err) {
//         console.error(err);
//     }
// }

// main();