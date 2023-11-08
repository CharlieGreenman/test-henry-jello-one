import { Component } from '@angular/core';
import { AuthService } from "@test-henry-jello-one/common/common-services";

@Component({
  selector: 'test-henry-jello-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'test-henry-jello-one';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }

  constructor(private authService: AuthService) {
  }

  logIn() {
    this.authService.loginWithRedirect()
  }

  signUp() {
    this.authService.signUpWithRedirect();
  }
}
