import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
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
    NgIf,
    RouterModule,
    SlicePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide: number = 0;
  autoSlideInterval: any;

  dataSource1 = PREDSTAVENIA;
  dataSource2 = AKTUALITY;

  ngOnInit() {
    this.startAutoSlide();
    this.setUpcomingEvents();
  }

  ngOnDestroy() {
    clearInterval(this.autoSlideInterval);
  }

  setUpcomingEvents() {
    this.dataSource1 = this.dataSource1.filter(item =>{
      let splitDate: string[] = (item.date ?? '').split('.');
      let date = new Date(Number(splitDate[2]), Number(splitDate[1]) - 1, Number(splitDate[0]));
      return date.getTime() >= Date.now();
    });
  }

  slide(action: number){
    const slider = document.querySelector('.slider')!;
    const slides = slider.children;
    const slideWidth = slider.scrollWidth / slides.length;

    this.currentSlide += action;

    if (this.currentSlide >= slides.length) {
      this.currentSlide = 0;
    } else if (this.currentSlide < 0) {
      this.currentSlide = slides.length - 1;
    }

    slider.scrollTo({
      left: this.currentSlide * slideWidth,
      behavior: 'smooth'
    });
  }

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.slide(1);
    }, 20000);
  }

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
