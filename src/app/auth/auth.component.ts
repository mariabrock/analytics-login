import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.router.navigate(['/landing'])

    form.reset();
  }
}
