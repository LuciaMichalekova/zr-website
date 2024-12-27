import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PREDSTAVENIA } from '../shared/predstavenia-mock';

@Component({
  selector: 'app-predstavenia',
  standalone: true,
  imports: [
    NgFor,
    MatButtonModule
  ],
  templateUrl: './predstavenia.component.html',
  styleUrl: './predstavenia.component.scss'
})
export class PredstaveniaComponent {
  dataSource = PREDSTAVENIA;
}
