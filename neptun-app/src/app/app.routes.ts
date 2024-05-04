import { Routes } from '@angular/router';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { InstructorComponent } from './instructor/instructor.component';

export const routes: Routes = [
    {
        path: 'instructor',
        component: InstructorComponent
    }
];
