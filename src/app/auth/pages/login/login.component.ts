import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { LoginForm } from 'src/app/core/models/login-form.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private authSrv: AuthService, private router: Router) {}

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    if (username && password) {
      const formValue: LoginForm = {
        Username: username,
        Password: password,
      };
      this.authSrv.login(formValue).subscribe(
        (res) => {
          const { token } = res;
          this.authSrv.setToken(token);
          console.log(res);
          this.router.navigate(['/content']);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }
}
