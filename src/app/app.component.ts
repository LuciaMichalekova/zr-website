import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from "./footer/footer.component";
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FontAwesomeModule,
    FooterComponent,
    NgClass,
],
})
export class AppComponent {
  title = 'zr-website';
  scrolled = false;
  currentPath: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Subscribe to router events to track path changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      this.currentPath = (event as NavigationEnd).urlAfterRedirects;

      // Add or remove 'scrolled' class based on path
      if (this.currentPath !== '/' ) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    });
  }


  @HostListener('window:scroll', [])

  onWindowScroll(): void {
    if(window.scrollY > 300){
      this.scrolled = true;
    }
    else if(this.currentPath == '/'){
      this.scrolled = false;
    }
  }
}
