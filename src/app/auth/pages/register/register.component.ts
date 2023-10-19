import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidators } from 'src/app/common/classes/password-validators';
import { Role } from 'src/app/core/interfaces/role';
import { UserRegister } from 'src/app/core/interfaces/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { RolesService } from 'src/app/core/services/roles.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registryForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      roleId: new FormControl(null, [Validators.required]),
    },
    {
      validators: PasswordValidators.MatchValidator,
    }
  );
  roles: Role[] = [];
  constructor(
    private authSrv: AuthService,
    private router: Router,
    private rolesSrv: RolesService
  ) {}

  ngOnInit() {
    this.getRoles();
  }

  get form() {
    return this.registryForm;
  }

  get fc() {
    return this.registryForm.controls;
  }

  getRoles() {
    this.rolesSrv.getRoles().subscribe((res) => {
      this.roles = res.data;
    });
  }

  onSubmit() {
    this.registryForm.markAllAsTouched();
    if (this.registryForm.invalid) {
      return;
    }
    this.registryForm.disable();
    const formValue: UserRegister = {
      Username: this.fc.username.value ?? '',
      Password: this.fc.password.value ?? '',
      Email: this.fc.email.value ?? '',
      RoleId: parseInt(this.fc.email.value || ''),
    };
    this.authSrv.register(formValue).subscribe(
      (res) => {
        this.authSrv.setToken(res.token);
        this.registryForm.reset();
        this.registryForm.enable();
        this.router.navigate(['/content']);
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
