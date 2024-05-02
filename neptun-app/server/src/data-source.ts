import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Grade } from "./entity/Grade"
import { Instructor } from "./entity/Instructor"
import { Student } from "./entity/Student"
import { Subject } from "typeorm/persistence/Subject"
import { Course } from "./entity/Course"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "neptunDB",
    synchronize: true,
    logging: true,
    entities: [User, Course, Grade, Instructor, Student, Subject],
    migrations: [],
    subscribers: [],
})
