import { Component, inject } from '@angular/core';
import { InstructorService } from '../services/instructor.service';
import { SubjectService } from '../services/subject.service';
import { Router } from '@angular/router';
import { InstructorDTO } from '../../../models';

@Component({
  selector: 'app-instructor-subjects',
  standalone: true,
  imports: [],
  templateUrl: './instructor-subjects.component.html',
  styleUrl: './instructor-subjects.component.css'
})
export class InstructorSubjectsComponent {
  instructorService = inject(InstructorService);
  subjectService = inject(SubjectService);
  
  router = inject(Router);

  instructors: InstructorDTO[] = [];

  ngOnInit(): void {
    this.instructorService.getAll().subscribe({
      next: instructors => this.instructors = instructors,
      error: err => console.error(err)
    });
  }
  goToInstructorForm(id: number) {
    this.router.navigate([ '/instructor-edit', id ]);
  }

  goToTaughtSubjects(id: number){
    this.router.navigate([ '/instructor-subjects', id ]);
  }

  deleteInstructor(instructor: InstructorDTO) {
    this.instructorService.delete(instructor.id).subscribe({
      next: () => {
        const index = this.instructors.indexOf(instructor);
        if (index > -1) {
          this.instructors.splice(index, 1);
        }
      },
      error: (err) => {
        // TODO: notification
        console.error(err);
      }
    });
  }
}
