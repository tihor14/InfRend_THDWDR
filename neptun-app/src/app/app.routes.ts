import { Routes } from '@angular/router';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { InstructorComponent } from './instructor/instructor.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import { InstructorSubjectsComponent } from './instructor-subjects/instructor-subjects.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
    {
        path: 'instructor',
        component: InstructorComponent
    },
    {
        path: 'instructor-add',
        component: InstructorFormComponent
    },
    {
        path: 'instructor-edit/:id',
        component: InstructorFormComponent
    },
    {
        path: 'instructor-subjects/:id',
        component: InstructorSubjectsComponent
    },
    {
        path: 'student',
        component: StudentComponent
    },
    {
        path: 'student-add',
        component: StudentFormComponent
    },
    {
        path: 'student-edit/:id',
        component: StudentFormComponent
    }
];
