import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { PREDSTAVENIA } from '../shared/predstavenia-mock';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-predstavenia',
  standalone: true,
  imports: [
    NgFor,
    RouterModule,
  ],
  templateUrl: './predstavenia.component.html',
  styleUrl: './predstavenia.component.scss'
})
export class PredstaveniaComponent {
  dataSource = PREDSTAVENIA;
}
