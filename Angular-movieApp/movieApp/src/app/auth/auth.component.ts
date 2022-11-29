import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginPage : boolean = false;
  error : string = '';
  constructor(private authService  : AuthService) { 
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
    if(!form.invalid){
      if(!this.loginPage){
        this.authService.SignUp(form.value.email, form.value.password).subscribe(
          {
            next: (v) => console.log(v),
            error: (e: HttpErrorResponse) => {
              console.error(e.error.error?.message)
              this.error = e.error.error?.message
            },
        }
        )
      }
      
      else{
        this.authService.SignIn(form.value.email, form.value.password).subscribe(
          res => console.log(res), err => console.log(err)
        )
      }
      
    }



  }

}
