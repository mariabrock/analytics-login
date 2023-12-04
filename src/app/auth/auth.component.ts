import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  private router= inject(Router);

  public showPassword: boolean;
  public showEmailError: boolean;
  public showPasswordError: boolean;

  public authForm = new FormGroup<any>({
    email: new FormControl<string>('', {validators: [Validators.required, Validators.email]}),
    password: new FormControl<string>('', {validators: [Validators.required]}),
  });

  constructor() {}

  onSubmit() {
    if (!this.authForm.valid) {
      return;
    } else {
      this.router.navigate(['/landing'])

    }
    this.authForm.reset();
  }
}
