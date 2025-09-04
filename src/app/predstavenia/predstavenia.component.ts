import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { PREDSTAVENIA } from '../shared/predstavenia-mock';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-predstavenia',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    RouterModule,
  ],
  templateUrl: './predstavenia.component.html',
  styleUrl: './predstavenia.component.scss'
})
export class PredstaveniaComponent implements OnInit {
  dataSource = PREDSTAVENIA;

  ngOnInit(): void {
    this.setUpcomingEvents();
  }

  setUpcomingEvents() {
    this.dataSource = this.dataSource.filter(item =>{
      let splitDate: string[] = (item.date ?? '').split('.');
      let date = new Date(Number(splitDate[2]), Number(splitDate[1]) - 1, Number(splitDate[0]));
      return date.getTime() >= Date.now();
    });
  }
}
