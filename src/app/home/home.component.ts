import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AKTUALITY } from '../shared/aktuality-mock';
import { PREDSTAVENIA } from '../shared/predstavenia-mock';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    MatButtonModule,
    NgFor,
    RouterModule,
    SlicePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  //nefunguje 100%
  slide(action: number){
    let slider = document.querySelector('.slider')!;
    let leftArrow = document.querySelector('.slider-arrow-left')!;
    let rightArrow = document.querySelector('.slider-arrow-right')!;
    let slideWidth = slider.scrollWidth / slider.childElementCount;

    if(action == -1){
      console.log("slide left");
      leftArrow.addEventListener('click', () => {
        console.log("sliding left");
        slider.scrollBy({
          left: -slideWidth,
          behavior: 'smooth',
        });
      });
    }

    else{
      console.log("slide right");

      rightArrow.addEventListener('click', () => {
        console.log("sliding right");
        let slideWidth = slider.scrollWidth / slider.childElementCount;
            slider.scrollBy({
                left: slideWidth,
                behavior: 'smooth',
            });
        });
    }
  }

  dataSource1 = PREDSTAVENIA;
  dataSource2 = AKTUALITY;
}
