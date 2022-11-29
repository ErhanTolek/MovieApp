import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authBody, authResponse } from '../models/authResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authToken = "AIzaSyBsluIh2b1DRmX_MhEP3H-Zn2AdDlwmXtk"
  constructor(private http : HttpClient) { }

  SignUp(email: string, password: string){
    return this.http.post<authResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.authToken, {
      email : email,
      password : password,
      returnSecureToken : true
    })
  }
  SignIn(email: string, password: string){
    return this.http.post<authResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.authToken, {
      email : email,
      password : password,
      returnSecureToken : true
    })
  }
}