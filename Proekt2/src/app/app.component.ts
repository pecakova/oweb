import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutuspageComponent } from './aboutuspage/aboutuspage.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, MenuComponent, AboutuspageComponent, ContactComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proekt2';
}
