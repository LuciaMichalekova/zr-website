import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AKTUALITY } from '../shared/aktuality-mock';

@Component({
  selector: 'app-aktuality',
  standalone: true,
  imports: [
    NgFor,
    MatButtonModule

  ],
  templateUrl: './aktuality.component.html',
  styleUrl: './aktuality.component.scss'
})
export class AktualityComponent {
  dataSource = AKTUALITY;
}
