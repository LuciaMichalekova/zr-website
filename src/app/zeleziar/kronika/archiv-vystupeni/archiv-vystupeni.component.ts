import { Component, ViewEncapsulation } from '@angular/core';
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
export class ArchivVystupeniComponent {
  datasource = PREDSTAVENIA;
  lotsOfTabs = new Array(26).fill(0).map((_, index) => `${2025 - index}`);
}
