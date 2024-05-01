import { Routes } from '@angular/router';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    {
        path: '',
        component: UserListComponent
    }
];
