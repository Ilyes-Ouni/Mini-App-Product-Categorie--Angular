import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from "../user";
@Component({
  selector: 'app-login-interface',
  templateUrl: './login-interface.component.html',
  styleUrls: ['./login-interface.component.css']
})
export class LoginInterfaceComponent implements OnInit {
  user:any = new User();
  erreur=0;
  constructor(private authService : AuthService, private router: Router) { }


  ngOnInit(): void {
    let isloggedin:any;
    let loggedUser:any;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');

    if (isloggedin!="true" || !loggedUser) this.router.navigate(['/login']);
    else this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }

  onLoggedin(){
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);

    if (isValidUser) this.router.navigate(['/']);
    else alert('Login ou mot de passe incorrecte!');
  }



}
