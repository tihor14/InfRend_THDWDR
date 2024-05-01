import { AppDataSource } from '../data-source';
import { Grade } from '../entity/Grade';
import { Controller } from './base.controller';

export class GradeController extends Controller {
  repository = AppDataSource.getRepository(Grade);
}
