import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private users: UserService, private auth: AuthService, private rou: Router) { }
  logindone: boolean = false;
  incorrect: boolean = false;

  ngOnInit(): void {
  }
  loginform = new FormGroup({
    admin_id: new FormControl(),
    password: new FormControl()
  });

  //server side commmunication  
  private data: any;
  public login(): void {
    this.logindone = false;
    this.incorrect = false;
    this.users.sign({ admin_id: this.loginform.controls.admin_id.value, password: this.loginform.controls.password.value }).subscribe(
      (respones: any) => {
        this.data = respones.message;
        if (this.data == 'Incorrect Username or Password') {
          this.incorrect = true;
        }
        else if (this.data == 'Login Successfully') {
          this.logindone = true;
          this.auth.makelog("!@#$#@!");
          this.auth.setadmin(this.loginform.controls.admin_id.value);
          this.rou.navigateByUrl('/home');

        }
      },
      (error: any) => { this.incorrect = true; console.error(error) }
    );
  }
  public goto(): void {
    this.rou.navigateByUrl('/sign-up');
  }



}
