import { Component } from '@angular/core';
import { MaterialModule } from '../../../../module/material/material.module';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {
  isOpened = true; // Sidenav starts opened

  toggleSidenav() {
    this.isOpened = !this.isOpened;
  }
}
