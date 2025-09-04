import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KROJE } from '../../shared/ponuka-krojov-mock';
import { GalleryComponent } from '../../gallery/gallery.component';

@Component({
  selector: 'app-pozicovna-krojov',
  standalone: true,
  imports: [
    RouterModule,
    NgFor,
    NgIf,
    GalleryComponent
],
  templateUrl: './pozicovna-krojov.component.html',
  styleUrl: './pozicovna-krojov.component.scss'
})

export class PozicovnaKrojovComponent {
  dataSource = KROJE;
  index = 0;
  image = this.dataSource[0].img;
  isHidden: boolean = true;

  open(image: any){
    this.isHidden = false;
    this.index = this.dataSource.indexOf(image);
  }

  close(){
    this.isHidden = true;
  }
}
