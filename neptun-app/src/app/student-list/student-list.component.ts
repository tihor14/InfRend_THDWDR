import { Component, OnInit, inject } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { StudentDTO } from '../../../models';
import { Student } from '../../../server/src/entity/Student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  studentService = inject(StudentService);

  router = inject(Router);

  students: StudentDTO[] = [];

  ngOnInit(): void {
    this.studentService.getAll().subscribe({
      next: students => this.students = students,
      error: err => console.error(err)
    });
  }
  goToStudentForm(id: number) {
    this.router.navigate([ '/student-edit', id ]);
  }

  deleteStudent(student: StudentDTO) {
    this.studentService.delete(student.id).subscribe({
      next: () => {
        const index = this.students.indexOf(student);
        if (index > -1) {
          this.students.splice(index, 1);
        }
      },
      error: (err) => {
        // TODO: notification
        console.error(err);
      }
    });
  }
}
