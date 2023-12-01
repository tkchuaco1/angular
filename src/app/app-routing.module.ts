import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: '/',
    // pathMatch: 'full'
    component: AppComponent,
  },
  {
    path: 'student',
    component: StudentComponent,
  },
];


export const AppRoutingModule = RouterModule.forRoot(routes);
