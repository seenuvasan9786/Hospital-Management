import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserService } from 'src/service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, } from '@angular/forms';
import { AppointmentComponent } from './appointment/appointment.component';
import { HistoryComponent } from './history/history.component';
import { OutPatientComponent } from './out-patient/out-patient.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppointmentComponent,
    HistoryComponent,
    OutPatientComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
