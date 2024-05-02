import { AppDataSource } from "./data-source";
import express from "express";
import { getRouter } from "./routes";
import { Instructor } from "./entity/Instructor";
import { User } from "./entity/User";

// AppDataSource.initialize().then(async () => {
    
//     // const user = new User();
//     // user.firstName = "Teszt";
//     // user.lastName = "Elek";
//     // user.email = "asd@adcs";
//     // user.password = "123";
//     // await AppDataSource.manager.save(user);
//     // console.log("User saved");
//     // AppDataSource.destroy();
// }).catch(error => {
//     console.log(error);
//     AppDataSource.destroy();
// });

async function main() {
  try {
    await AppDataSource.initialize();
    const app = express();

    app.use(express.json());
    app.use('/api', getRouter());

    app.listen(3000, () => {
      console.log("Listening on port 3000...");
    });

  } catch (error) {
    console.log(error);
  }
}

main();