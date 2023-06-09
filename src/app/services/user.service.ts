import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user'
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  Url="http://localhost:3000/user"

  constructor(private bostagi: HttpClient) {}

  register(user:any){
    let url=`${this.Url}/register`;

    return this.bostagi.post<{data:any}>(this.Url,user);
  }
  login(user:any){
    let url=`${this.Url}/login`;
    return this.bostagi.post<{data:any}>(url,user);


}
saveUserDate(token:any,user:any) {
  sessionStorage.setItem(TOKEN_KEY, token);
  sessionStorage.setItem(USER_KEY, JSON.stringify(user));
}
}
