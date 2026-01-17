import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// IMPORT YOUR COMPONENTS
import { HomeComponent } from './pages/home/home';
import { Navbar } from './components/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,         // Navbar visible on every page
    HomeComponent   // Register standalone Home
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shravani_portfolio');
}
