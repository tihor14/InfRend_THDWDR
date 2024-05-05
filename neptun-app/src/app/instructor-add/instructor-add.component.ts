import { Component, inject } from '@angular/core';
import { InstructorService } from '../services/instructor.service';
import { Router } from '@angular/router';
import { InstructorDTO } from '../../../models';

@Component({
  selector: 'app-instructor-add',
  standalone: true,
  imports: [],
  templateUrl: './instructor-add.component.html',
  styleUrl: './instructor-add.component.css'
})
export class InstructorAddComponent {
  instructorService = inject(InstructorService);

  router = inject(Router);

  instructors: InstructorDTO[] = [];

  ngOnInit(): void {
    this.instructorService.getAll().subscribe({
      next: instructors => this.instructors = instructors,
      error: err => console.error(err)
    });
  }
  goToInstructorAddForm() {
    this.router.navigate([ '/instructor-add']);
  }
}
