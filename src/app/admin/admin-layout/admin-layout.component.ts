import { FooterComponent } from './../component/layout/footer/footer.component';
import { MaterialModule } from './../../module/material/material.module';
import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../component/layout/header/header.component';
import { SideNavbarComponent } from '../component/layout/side-navbar/side-navbar.component';





@Component({

  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet,MaterialModule,FooterComponent,HeaderComponent,SideNavbarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {
  @ViewChild(FooterComponent) footerComponent!: FooterComponent;
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChild(SideNavbarComponent) sidenavbarComponent!: SideNavbarComponent;

}
