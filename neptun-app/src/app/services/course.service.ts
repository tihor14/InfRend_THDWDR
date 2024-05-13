import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CourseDTO } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<CourseDTO[]>('/api/course');    
  }

  getOne(id: number) {
    return this.http.get<CourseDTO>('/api/course/' + id);    
  }
  coursesOfSubject(subjectId: number){
    return this.http.get<CourseDTO[]>('/api/course/list-by/' + subjectId);
  }
}