import { Component, OnInit, inject } from '@angular/core';
import { InstructorService } from '../services/instructor.service';
import { InstructorDTO } from '../../../models';

@Component({
  selector: 'app-instructor-list',
  standalone: true,
  imports: [],
  templateUrl: './instructor-list.component.html',
  styleUrl: './instructor-list.component.css'
})
export class InstructorListComponent implements OnInit{
  instructorService = inject(InstructorService);

  instructors: InstructorDTO[] = [];

  ngOnInit(): void {
    this.instructorService.getAll().subscribe({
      next: instructors => this.instructors = instructors,
      error: err => console.error(err)
    });
  }
}
