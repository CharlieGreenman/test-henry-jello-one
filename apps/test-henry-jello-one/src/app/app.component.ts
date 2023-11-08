import { Component } from '@angular/core';

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
}
