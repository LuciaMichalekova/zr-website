import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AKTUALITY } from '../shared/aktuality-mock';
import { MatPaginator } from '@angular/material/paginator';
import { AktualitaComponent } from "./aktualita/aktualita.component";
import { RouterLink } from "@angular/router";
import { PageEvent } from '@angular/material/paginator';
import { Aktualita } from '../models/Aktualita';

@Component({
  selector: 'app-aktuality',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    MatButtonModule,
    AktualitaComponent,
    MatPaginator,
    RouterLink
],
  templateUrl: './aktuality.component.html',
  styleUrl: './aktuality.component.scss'
})
export class AktualityComponent implements OnInit, AfterViewInit {
  dataSource = AKTUALITY;
  showSelected = false;
  selectedItem: any = null;
  pagedData: Aktualita[] = [];
  pageSize = 5;
  pageIndex = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.sortActualityByDate();
  }

  ngAfterViewInit() {
    this.updatePagedData();
  }

  updatePagedData() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    console.log(start, end);
    this.pagedData = this.dataSource.slice(start, end);
    console.log(this.pagedData);
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePagedData();
  }

  sortActualityByDate(): void {
    this.dataSource.sort((a, b) => {
      const dateA = new Date(a.date.split('.').reverse().join('-'));
      const dateB = new Date(b.date.split('.').reverse().join('-'));
      return dateB.getTime() - dateA.getTime();
    });
  }

  selectActuality(item: any): void {
    this.showSelected = true;
    this.selectedItem = item;
  }
}
