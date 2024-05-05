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
}
