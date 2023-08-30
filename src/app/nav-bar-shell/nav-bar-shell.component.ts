import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar-shell',
  templateUrl: './nav-bar-shell.component.html',
  styleUrls: ['./nav-bar-shell.component.css']
})
export class NavBarShellComponent {
  menuVisible: boolean = false;
  isScrolled: boolean = false;

  
  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
