import { AppDataSource } from '../data-source';
import { Course } from '../entity/Course';
import { Controller } from './base.controller';

export class CourseController extends Controller {
  repository = AppDataSource.getRepository(Course);

//   coursesOfSubject = async (req, res) => {
//     try {
//         const subjectId = req.params.subjectId;

//         const courses = await this.repository.find({
//             where: {
//                 subject: { id: subjectId }
//             }
//         });

//         res.json(courses);
//     } catch (err) {
//         this.handleError(res, err);
//     }
// };
// coursesOfSubject = async (req, res) => {
//     try {
//         const subjectId = req.params.subjectId;
//         console.log(subjectId);
//         const courses = await this.repository.find({
//             where: {
//                 subject: { id: subjectId } // A subject mező tartalmazza a subjectId-t
//             }
//         });
        

//         res.json(courses);
//     } catch (err) {
//         this.handleError(res, err);
//     }
//   };
}
