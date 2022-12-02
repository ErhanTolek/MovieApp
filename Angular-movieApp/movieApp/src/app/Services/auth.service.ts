import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { authBody, authResponse } from '../models/authResponse';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authToken = "AIzaSyBsluIh2b1DRmX_MhEP3H-Zn2AdDlwmXtk"
  user = new BehaviorSubject<User>(null);
  constructor(private http : HttpClient) { }

  SignUp(email: string, password: string){
    return this.http.post<authResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.authToken, {
      email : email,
      password : password,
      returnSecureToken : true
    }).pipe(
      tap(
        (response) =>{
          const expirationDate = new Date(new Date().getTime() + (+response.expiresIn * 1000))
          const user = new User(
            response.email,
            response.localId,
            response.idToken,
            expirationDate
          );
        this.user.next(user)

        }
      )
    )
  }
  SignIn(email: string, password: string){
    return this.http.post<authResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.authToken, {
      email : email,
      password : password,
      returnSecureToken : true
    }).pipe(
      tap(
        (response) =>{
          const expirationDate = new Date(new Date().getTime() + (+response.expiresIn * 1000))
          const user = new User(
            response.email,
            response.localId,
            response.idToken,
            expirationDate
          );
        this.user.next(user)

        }
      )
    )
  }
}