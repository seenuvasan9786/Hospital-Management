import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/Authorized/admin.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CanActivate } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { HistoryComponent } from './history/history.component';
import { OutPatientComponent } from './out-patient/out-patient.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AdminGuard] },
  { path: 'appointment', component: AppointmentComponent, canActivate: [AdminGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [AdminGuard] },
  { path: 'out-patient', component: OutPatientComponent, canActivate: [AdminGuard] },
  { path: 'sign-up', component: SignupComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
