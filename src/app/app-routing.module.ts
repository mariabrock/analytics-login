import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from "./auth/auth.component";
import { LandingComponent } from "./landing/landing.component";

const routes: Routes = [
  { path:'', component: AuthComponent },
  { path: 'auth', component: AuthComponent },
  { path:'landing', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
