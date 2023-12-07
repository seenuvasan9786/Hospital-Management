import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = environment.apiurl;


  //post the data into database through server
  public sign(data: any): any {
    return this.http.post(this.url + '/login', data, { headers: new HttpHeaders().set('content-type', 'application/json') });//.set('Acces-Control-Allow-Oriigin','*')});
  }

  public pointadd(data: Object): any {
    return this.http.post(this.url + '/addappointd', data, { headers: new HttpHeaders().set('content-type', 'application/json') });
  }

  public getapplist(): any {
    return this.http.get(this.url + '/applists', { headers: new HttpHeaders().set('content-type', 'application/json') });
  }

  public DmoveH(data: object): any {
    return this.http.post(this.url + '/deleteuser', data, { headers: new HttpHeaders().set('content-type', 'application/json') });
  }

  public gethistory(): any {
    return this.http.get(this.url + '/gethistory', { headers: new HttpHeaders().set('content-type', 'application/json') });
  }

  public postuser(data: object): any {
    return this.http.post(this.url + '/senduser', data, { headers: new HttpHeaders().set('content-type', 'application/json') });
  }

  public displaypdt(): any {
    return this.http.get(this.url + '/recived-data', { headers: new HttpHeaders().set('content-type', 'application/json') });
  }

  public deloutp(list: object): any {
    return this.http.post(this.url + '/deloutp', list, { headers: new HttpHeaders().set('content-type', 'application/json') });
  }


  public getuname(listd: any): any {
    return this.http.post(this.url + '/getuname', listd, { headers: new HttpHeaders().set('content-type', 'application/json') });
  }

  public signups(fulldata: object): any {
    return this.http.post(this.url + '/signup', fulldata, { headers: new HttpHeaders().set('content-type', 'application/json') });
  }

}
