import { Component } from '@angular/core';
import { GalleryWrapperComponent } from '../../../gallery/gallery-wrapper/gallery-wrapper.component';

@Component({
  selector: 'app-maraton-tanca',
  standalone: true,
  imports: [GalleryWrapperComponent],
  templateUrl: './maraton-tanca.component.html',
  styleUrl: './maraton-tanca.component.scss'
})
export class MaratonTancaComponent {
    scrolll(){
    const images = document.querySelector(".scroll-box")!;
    const screenWidth = images.scrollWidth;
    const scrollAmount = screenWidth / images.childElementCount;
    images.scrollBy(-scrollAmount, 0);
  }

  scrollr(){
    const images = document.querySelector(".scroll-box")!;
    const screenWidth = images.scrollWidth;
    const scrollAmount = screenWidth / images.childElementCount;
    images.scrollBy(scrollAmount, 0);
  }
}
