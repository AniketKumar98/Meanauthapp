import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post('http://localhost:3000/users/register', user, httpOptions);
  }
  authenticateUser(user) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
       })
    };
    return this.http.post('http://localhost:3000/users/authenticate', user, httpOptions);
  }
  getProfile(){
    return JSON.parse(localStorage.getItem('user'));


  }
  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
    this.user=user;
  }

  loadToken(){
    const token=localStorage.getItem('id_token');
    this.authToken=token;
  }
  logout(){
    this.authToken = null;
    this.user=null;
    localStorage.clear();
  }
}
