import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from "./footer/footer.component";
import { NgClass, NgFor, NgIf } from '@angular/common';
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
    NgIf,
    NgFor
],
})
export class AppComponent {
  title = 'zr-website';
  scrolled = false;
  currentPath: string = '';
  isMobile: boolean = window.innerWidth < 1200;
  isMenuOpen: boolean = false;
  activeSubMenu: string | null = null;
  activeSubSubMenu: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      window.scrollTo(0, 0);
      this.isMenuOpen = false;
      this.activeSubMenu = null;
      this.activeSubSubMenu = null;
      this.currentPath = (event as NavigationEnd).urlAfterRedirects;
      this.scrolled = ["obsadenie-suboru", "produkty", "galeria"].some(path => this.currentPath.includes(path));
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrolled = ["obsadenie-suboru", "produkty"].some(path => this.currentPath.includes(path));
    if(this.scrolled == false){
      (window.scrollY > 100) ? this.scrolled = true : this.scrolled = false;
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    this.isMobile = window.innerWidth < 1200;
    if (!this.isMobile) {
      this.isMenuOpen = false;
      this.activeSubMenu = null;
      this.activeSubSubMenu = null;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubMenu(menu: string) {
    this.activeSubMenu = this.activeSubMenu === menu ? null : menu;
  }

  toggleSubSubMenu(menu: string) {
    this.activeSubSubMenu = this.activeSubSubMenu === menu ? null : menu;
  }
}
