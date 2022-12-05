import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated : boolean = false;
  date = new Date();
  constructor(private authSevice : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.authSevice.user.subscribe(
      user => {
        this.isAuthenticated = !!user
      }
    )
  }
  LogOut(){
    this.authSevice.LogOut();
    this.router.navigateByUrl('/login')
  }



}
