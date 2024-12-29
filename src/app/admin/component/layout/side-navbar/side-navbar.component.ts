import { Component } from '@angular/core';
import { MaterialModule } from '../../../../module/material/material.module';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [MaterialModule,RouterOutlet],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {
  opened = true; // Sidenav starts opened

  toggleSidenav() {
    this.opened = !this.opened;
  }
}

