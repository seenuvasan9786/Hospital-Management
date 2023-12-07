import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private server: UserService, private rou: Router) { }

  ngOnInit(): void {
  }

  logindone: boolean = false;
  incorrect: boolean = false;
  accept: boolean = false;

  signupform = new FormGroup({
    uname: new FormControl('', Validators.required),
    umail: new FormControl('', Validators.required),
    admin_id: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  public getsignup(): object {
    var obj = {
      name: this.signupform.controls.uname.value,
      email_id: this.signupform.controls.umail.value,
      admin_id: this.signupform.controls.admin_id.value,
      password: this.signupform.controls.password.value
    }
    return obj;
  }

  public signup(): void {
    if (this.signupform.valid == true) {
      this.server.signups(this.getsignup()).subscribe(
        (Response: any) => {
          this.incorrect = false;
          this.logindone = false;
          this.accept = false;
          if (Response.message == 'Admin Id is already Exist try another id') {
            this.incorrect = true;
          }
          else if (Response.message == 'Please fill the all Input Field') {
            this.logindone = true;
          }
          else if (Response.message == "Registration Successfully") {
            this.accept = true;
          }
          else {
            console.log('Something is Wrong');
          }
        },
        (error: any) => {
          console.log(error);
        }
      )
    }
    else {
      this.logindone = true;
    }
  }
  public goto() {
    this.rou.navigateByUrl('/login');
  }
}
