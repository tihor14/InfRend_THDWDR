import { AppDataSource } from '../data-source';
import { Course } from '../entity/Course';
import { Controller } from './base.controller';

export class CourseController extends Controller {
  repository = AppDataSource.getRepository(Course);
}
