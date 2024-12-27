import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { VEDENIE } from '../../../shared/clenovia-mock';

@Component({
  selector: 'app-umelecke-vedenie',
  standalone: true,
  imports: [
    NgFor,

  ],
  templateUrl: './umelecke-vedenie.component.html',
  styleUrl: './umelecke-vedenie.component.scss'
})
export class UmeleckeVedenieComponent {
  dataSource = VEDENIE;
}
