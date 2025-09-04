import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery.component';

@Component({
  selector: 'app-gallery-wrapper',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    SlicePipe,
    GalleryComponent
  ],
  templateUrl: './gallery-wrapper.component.html',
  styleUrl: './gallery-wrapper.component.scss'
})
export class GalleryWrapperComponent {
  dataSource: any[] = Array(5).fill("assets/img/FS Železiar_Kino Scala_Prešov-21.jpg");
  isHidden: boolean = true;
  index = 0;
  image: any;


  open(image: any){
    this.isHidden = false;
    this.index = this.dataSource.indexOf(image);
  }

  close(){
    this.isHidden = true;
  }

  scrolll(){
    console.log("scrolll");
    var images = document.querySelector(".scroll-box")!;
    const screenWidth = images.scrollWidth;
    const scrollAmount = screenWidth / images.childElementCount;
    images?.scrollBy(-scrollAmount, 0);
  }

  scrollr(){
    console.log("scrollr");
    var images = document.querySelector(".scroll-box")!;
    const screenWidth = images.scrollWidth;
    const scrollAmount = screenWidth / images.childElementCount;
    images?.scrollBy(scrollAmount, 0);
  }
}
