import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private server: UserService, private rou: Router) { }
  ngOnInit(): void {
    this.getapplist();
  }
  public go(): void {
    this.rou.navigateByUrl('/home');
  }
  public error1: boolean = false;
  public error2: boolean = false;
  public exname: String = '';
  public error3: boolean = false;

  addAppointment = new FormGroup({
    Patient_id: new FormControl(),
    Patient_name: new FormControl(),
    Doctor_name: new FormControl(),
    Appointment_Date: new FormControl(),
    Fix_or_reschedule: new FormControl()
  });
  public clearInsert() {
    this.addAppointment.controls.Patient_id.setValue('');
    this.addAppointment.controls.Patient_name.setValue('');
    this.addAppointment.controls.Doctor_name.setValue('');
    this.addAppointment.controls.Appointment_Date.setValue('');
    this.addAppointment.controls.Fix_or_reschedule.setValue('');
  }
  public get_list(): object {
    var details = {
      patient_id: this.addAppointment.controls.Patient_id.value,
      patient_name: this.addAppointment.controls.Patient_name.value,
      Doctor_name: this.addAppointment.controls.Doctor_name.value,
      Appdate: this.addAppointment.controls.Appointment_Date.value,
      state: this.addAppointment.controls.Fix_or_reschedule.value
    }
    return details;
  }

  public add_list(): void {
    this.error3 = false;
    this.error2 = false;
    this.error1 = false;
    this.server.pointadd(this.get_list()).subscribe(
      (Response: any) => {
        this.getapplist();
        if (Response.message == 'Data Inserted Success') {
          this.error3 = true;
          this.error1 = true;
          this.clearInsert();
        }
        else if (Response.message == 'Data already Exist') {
          this.error1 = true;
          this.error2 = true;
          this.exname = this.addAppointment.controls.Patient_id.value;
        }
        else {
          console.error(Response.message);
        }
      },
      (error: any) => { console.error('Somthing is wrong'); }
    );
  }


  public applistdata: any;
  public getapplist(): void {
    this.server.getapplist().subscribe(
      (Response: any) => {
        if (Response.message == 'Somthing is Wrong') {
          console.error(Response.message);
        }
        else {
          this.applistdata = Response;
        }
      },
      (error: any) => { console.error(error) }
    );
  }

  public RemoveAdd(data: Object): void {
    this.server.DmoveH(data).subscribe(
      (Response: any) => {
        this.getapplist();
        console.log(Response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }



}
