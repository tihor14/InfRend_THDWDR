import { Component, OnInit, inject } from '@angular/core';
import { InstructorService } from '../services/instructor.service';
import { SubjectService } from '../services/subject.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorDTO, SubjectDTO } from '../../../models';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-instructor-subjects',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './instructor-subjects.component.html',
  styleUrl: './instructor-subjects.component.css'
})
export class InstructorSubjectsComponent implements OnInit{
  formBuilder = inject(FormBuilder);

  instructorService = inject(InstructorService);
  
  subjectService = inject(SubjectService);

  subjects: SubjectDTO[] = [];

  activedRoute = inject(ActivatedRoute);

  subjectForm = this.formBuilder.group<SubjectDTO>({
    id: 0,
    name: '',
    instructor: null,
    course: null
  });

  ngOnInit(): void {
    //this.instructorService.getAll().subscribe(instructors => this.instructors = instructors);
    const id = this.activedRoute.snapshot.params['id'];
    this.subjectService.subjectsOfInstructor(id)
    .subscribe(subjects => this.subjects = subjects);
  }

  
}
