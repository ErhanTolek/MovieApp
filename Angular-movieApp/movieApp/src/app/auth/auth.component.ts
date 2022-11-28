import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginPage : boolean = false;
  constructor() { 
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
    if(form.invalid){
      return
    }
  }

}
