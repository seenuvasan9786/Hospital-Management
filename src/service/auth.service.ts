import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private isLogin: boolean = false;
  public getislogin(): boolean {
    return this.isLogin;
  }

  public logout(): void {
    this.isLogin = false;
  }

  public makelog(from: String): String {
    if (from == "!@#$#@!") {
      this.isLogin = true;
      return 'done';
    }
    else {
      this.isLogin = false;
      return 'Unauthorized';
    }
  }

  public username: string = '';
  public adminid: string = '';

  public setuname(uname: string): void {
    this.username = uname;
  }
  public setadmin(admin: string): void {
    this.adminid = admin;
  }
}
