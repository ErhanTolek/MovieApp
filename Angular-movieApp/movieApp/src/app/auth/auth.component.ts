import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, timeout } from 'rxjs';
import { authResponse } from '../models/authResponse';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginPage : boolean = false;
  error : string = '';
  loading : boolean = false
  constructor(private authService  : AuthService, private router : Router) { 
    console.log(this.loginPage)
  }

  ngOnInit(): void {
  }
  log(data:any){
    console.log(data)
  }
  toggleLoginMood(){
    this.loginPage = !this.loginPage
  }
  
  onSubmit(form : NgForm){
    // if(!form.invalid){
    //   if(!this.loginPage){
    //     this.authService.SignUp(form.value.email, form.value.password).subscribe(
    //       {
    //         next: (v) => console.log(v),
    //         error: (e: HttpErrorResponse) => {
    //           this.error = e.error.error?.message
    //         },
    //     }
    //     )
    //   }
      
    //   else{
    //     this.authService.SignIn(form.value.email, form.value.password).subscribe(
    //       {
    //         next: (v) => console.log(v),
    //         error: (e: HttpErrorResponse) => {
    //           this.error = e.error.error?.message
    //         }
    //       }
    //     )
        
    //   }

      
    // }

    if(form.invalid) 
      return;
    
    const email = form.value.email;
    const password = form.value.password;

    this.loading = true;

    let authResponse: Observable<authResponse>;

    if(this.loginPage) {
      authResponse = this.authService.SignIn(email, password)
    } else {
      authResponse = this.authService.SignUp(email, password)
    }

    authResponse.subscribe(response => {
      this.loading = false;
      this.router.navigate(['/movies']);
    }, err => {
      this.error = err.error.error?.message;     
      this.loading = false;
    })

    form.reset();

  }

}
