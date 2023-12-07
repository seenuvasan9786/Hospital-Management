import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-out-patient',
  templateUrl: './out-patient.component.html',
  styleUrls: ['./out-patient.component.css']
})
export class OutPatientComponent implements OnInit {

  constructor(private rou: Router, private server: UserService) { }

  ngOnInit(): void {
    this.startdis();
  }
  public go(): void {
    this.rou.navigateByUrl('/home');
  }
  public error1: boolean = false;
  public error2: boolean = false;
  public error3: boolean = false;
  public exname: string = '';
  public outpstore: any;

  outpatient = new FormGroup({
    Patient_id: new FormControl(),
    Patient_name: new FormControl(),
    gender: new FormControl(),
    Age: new FormControl(),
    Email_id: new FormControl(),
    Phone_no: new FormControl()
  });

  public get_list(): object {
    var details = {
      patient_id: this.outpatient.controls.Patient_id.value,
      patient_name: this.outpatient.controls.Patient_name.value,
      gender: this.outpatient.controls.gender.value,
      age: this.outpatient.controls.Age.value,
      Email_id: this.outpatient.controls.Email_id.value,
      Phone_no: this.outpatient.controls.Phone_no.value
    }
    return details;
  }
  public add_list(): void {
    this.error3 = false;
    this.error2 = false;
    this.error1 = false;
    this.server.postuser(this.get_list()).subscribe(
      (Response: any) => {
        if (Response.message == 'Patient ID Already Exist') {
          this.exname = this.outpatient.controls.Patient_id.value;
          this.error1 = true;
          this.error2 = true;
        }
        else if (Response.message == 'Data inserted success') {
          this.error1 = true;
          this.error3 = true;
        }
      },
      (error: any) => { console.error('Somthing is wrong'); }
    );
  }

  public startdis(): void {
    this.server.displaypdt().subscribe(
      (Response: any) => {
        this.startdis();
        this.outpstore = Response;
      },
      (error: any) => { console.log(error) }
    );
  }


  public Removeadd(list: object) {
    this.server.deloutp(list).subscribe(
      (Response: any) => {
        this.startdis();
        console.log(Response.message);
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
