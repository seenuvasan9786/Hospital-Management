import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private rou: Router, private server: UserService) { }
  public go(): void {
    this.rou.navigateByUrl('/home');
  }
  ngOnInit(): void {
    this.gethistorys();
  }
  public userstore: any;
  public gethistorys(): void {
    this.server.gethistory().subscribe(
      (Response: any) => { this.userstore = Response },
      (error: any) => { console.error(error) }
    );
  }

}
