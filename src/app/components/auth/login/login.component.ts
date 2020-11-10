import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI }  from '../../models/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private route: Router, private authSvc: AuthService) {}
  hide = true;
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit() {}

  

  onLogin(form: UserI) {
    this.authSvc
      .loginByEmail(form)
      .then(res => {
        console.log('Successfully', res);
        this.route.navigate(['/']);
      })
      .catch(err => console.log('Error', err));
  }

}

