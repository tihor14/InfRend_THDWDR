import { AppDataSource } from '../data-source';
import { Instructor } from '../entity/Instructor';
import { Controller } from './base.controller';

export class InstructorController extends Controller {
  repository = AppDataSource.getRepository(Instructor);
}
