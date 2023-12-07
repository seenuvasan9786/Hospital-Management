import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private rou: Router, private user: UserService) { }

  public adminlogout(): void {
    this.auth.logout();
    this.adminid = '';
    this.name = '';
    this.rou.navigateByUrl('/login');
  }

  public Goto(link: string): void {
    this.rou.navigateByUrl(link);
  }

  public adminid = '';
  public name = '';
  ngOnInit(): void {
    this.adminid = this.auth.adminid;
    this.staart();
  }

  public staart(): void {
    this.user.getuname({ Name: this.auth.adminid }).subscribe(
      (Response: any) => {
        this.name = Response[0].Name;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

}
