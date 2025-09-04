import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PREMIERY } from '../../../shared/premiery-mock';

@Component({
  selector: 'app-archiv-premier',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './archiv-premier.component.html',
  styleUrl: './archiv-premier.component.scss'
})
export class ArchivPremierComponent implements OnInit {
  dataSource = PREMIERY;

  ngOnInit(): void {
    this.setEndedEvents();
  }

  setEndedEvents() {
    this.dataSource = this.dataSource.filter(item =>{
      let splitDate: string[] = (item.date ?? '').split('.');
      let date = new Date(Number(splitDate[2]), Number(splitDate[1]) - 1, Number(splitDate[0]));
      return date.getTime() < Date.now();
    });
  }
}
