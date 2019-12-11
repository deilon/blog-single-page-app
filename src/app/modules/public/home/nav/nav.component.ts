import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    // this.authLoginService.loginUser();
    // this.router.navigate(['blog', 'read']);
  }

  onLogout() {
    this.authService.logoutUser();
    // this.router.navigate(['blog', 'read']);
  }

}
