import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SubjectDTO } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<SubjectDTO[]>('/api/subject');    
  }

  getOne(id: number) {
    console.log(this.http.get<SubjectDTO>('/api/subject/' + id));
    return this.http.get<SubjectDTO>('/api/subject/' + id);    
  }
  subjectsOfInstructor(instructorId: number){
    return this.http.get<SubjectDTO[]>('/api/subject/taught-by/' + instructorId);
  }
  
}