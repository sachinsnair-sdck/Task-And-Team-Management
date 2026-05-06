import { Routes } from '@angular/router';
// ADD THESE IMPORTS (Check your folder paths!)
import { UserListComponent } from './user-list/user-list.component'; 
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }
];