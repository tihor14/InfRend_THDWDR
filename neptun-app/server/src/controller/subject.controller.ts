import { AppDataSource } from '../data-source';
import { Subject } from '../entity/Subject';
import { Controller } from './base.controller';

export class SubjectController extends Controller {
  repository = AppDataSource.getRepository(Subject);
}
