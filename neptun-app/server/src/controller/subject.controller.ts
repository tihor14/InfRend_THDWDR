import { AppDataSource } from '../data-source';
import { Subject } from '../entity/Subject';
import { Controller } from './base.controller';

export class SubjectController extends Controller {
  repository = AppDataSource.getRepository(Subject);

  create = async (req, res) => {
    try {
        const entity = this.repository.create(req.body as object);

        const entityInserted = await this.repository.save(entity);
        res.json(entityInserted);
    } catch (err) {
        this.handleError(res, err);
    }
};

  subjectsOfInstructor = async (req, res) => {
    try {
        const instructorId = req.params.instructorId;

        const subjects = await this.repository.find({
            where: {
                instructor: { id: instructorId }
            }
        });

        res.json(subjects);
    } catch (err) {
        this.handleError(res, err);
    }
};

// coursesOfSubject = async (req, res) => {
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

//         const subject = await this.repository.findOne(subjectId);

//         if (!subject) {
//             return this.handleError(res, null, 404, 'Subject not found.');
//         }
//         console.log(subject);
//         console.log(subjectId);
//         res.json(subject.course);
//     } catch (err) {
//         this.handleError(res, err);
//     }
// };

}
