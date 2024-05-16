import { getConnection } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Grade } from '../entity/Grade';
import { Controller } from './base.controller';

export class GradeController extends Controller {
  repository = AppDataSource.getRepository(Grade);
  
  create = async (req, res) => {
    try {
        const entity = this.repository.create(req.body as object);

        const entityInserted = await this.repository.save(entity);
        res.json(entityInserted);
    } catch (err) {
        this.handleError(res, err);
    }
};
//   getAverageGradeByCourse = async (req, res) => {
//     const courseId = Number(req.params.courseId);

//     const grades = await this.repository.find({
//       where: { course: { id: courseId } },
//       select: ['grade']
//     });

//     if (grades.length === 0) {
//     return res.status(404).send(`No grades found for course ${courseId}`);
//     }

//     const sum = grades.reduce((a, b) => a + b.grade, 0);
//     const average = sum / grades.length;

//     res.json({ average });
// }
//   async getAverageGradeByStudent(studentId: number) {
//     try {
//       const averageGrade = await getConnection()
//         .createQueryBuilder()
//         .select("AVG(grade)", "average")
//         .from(Grade, "grade")
//         .where("grade.studentId = :studentId", { studentId })
//         .getRawOne();

//       return averageGrade;
//     } catch (error) {
//       throw error;
//     }
//   }
}
