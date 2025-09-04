import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { PREDSTAVENIA } from '../../../shared/predstavenia-mock';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-archiv-vystupeni',
  standalone: true,
  imports: [
    MatTabsModule,
    NgFor
  ],
  templateUrl: './archiv-vystupeni.component.html',
  styleUrl: './archiv-vystupeni.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ArchivVystupeniComponent implements OnInit {
  dataSource = PREDSTAVENIA;
  lotsOfTabs = new Array(26).fill(0).map((_, index) => `${2025 - index}`);

  ngOnInit(): void {
    this.setDoneEvents();
  }

  setDoneEvents() {
    this.dataSource = this.dataSource.filter(item =>{
      let splitDate: string[] = (item.date ?? '').split('.');
      let date = new Date(Number(splitDate[2]), Number(splitDate[1]) - 1, Number(splitDate[0]));
      return date.getTime() < Date.now();
    });
  }

  getItemsForYear(year: string) {
    return this.dataSource.filter(item => {
        if (!item.date){
          return false;
        }
        const itemYear = item.date.split('.').reverse()[0];
        return itemYear === year;
    });
  }
}
