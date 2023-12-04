import { Component } from '@angular/core';
import { AuthComponent } from "./auth/auth.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'analytics-login';
  public loggedIn = false;

  showHideNav(event: any){
    this.loggedIn= !(event instanceof AuthComponent);
  }

}
