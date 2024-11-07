import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JoinComponent } from './pages/join/join.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'join', component: JoinComponent },
  { path: 'login', component: LoginComponent },
];
