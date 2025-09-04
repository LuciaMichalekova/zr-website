import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SlicePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { KROJE } from '../../shared/ponuka-krojov-mock';
import { GalleryComponent } from '../../gallery/gallery.component';
import { GalleryWrapperComponent } from "../../gallery/gallery-wrapper/gallery-wrapper.component";

@Component({
  selector: 'app-aktualne-programy',
  standalone: true,
  imports: [
    MatButtonModule,
    NgFor,
    RouterModule,
    SlicePipe,
    NgIf,
    GalleryComponent,
    GalleryWrapperComponent
],
  templateUrl: './aktualne-programy.component.html',
  styleUrl: './aktualne-programy.component.scss'
})
export class AktualneProgramyComponent {
  dataSource: any[] = [];
  images1 = Array(5).fill("assets/img/FS Železiar_Kino Scala_Prešov-21.jpg");
  images2 = Array(5).fill("assets/img/305942642_1091677618379315_2271909170891964180_n.jpg");
  isHidden: boolean = true;
  index = 0;
  // image = this.dataSource[0].img;

  open(image: any, source: any[]){
    this.dataSource = source;
    this.isHidden = false;
    this.index = this.dataSource.indexOf(image);
  }

  close(){
    this.isHidden = true;
  }

  //TODO: nech to ide pre kazdy scroll-box - document.querySelector berie len 1. prvok
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
