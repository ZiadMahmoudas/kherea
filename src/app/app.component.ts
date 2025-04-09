import { Component } from '@angular/core';
import {  RouterModule, RouterOutlet } from '@angular/router';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TopnavbarComponent,
    FooterComponent,
    NavbarComponent,
    RouterModule,
    CommonModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lokk';
}
