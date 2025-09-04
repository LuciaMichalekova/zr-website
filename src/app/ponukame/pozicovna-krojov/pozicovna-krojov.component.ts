import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KROJE } from '../../shared/ponuka-krojov-mock';
import { style } from '@angular/animations';

@Component({
  selector: 'app-pozicovna-krojov',
  standalone: true,
  imports: [
    RouterModule,
    NgFor,
    NgIf
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
    this.image = image.img;
    this.isHidden = false;
    this.index = this.dataSource.indexOf(image);
  }

  close(){
    this.isHidden = true;
  }

  slide(value: number){
    this.index += value;
    if(this.index >= this.dataSource.length){
      this.index = 0;
    }
    else if(this.index < 0){
      this.index = this.dataSource.length - 1;
    }
    this.image = this.dataSource[this.index].img;
    console.log(this.index);
  }
}
