import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SPEVACKY } from '../../../shared/clenovia-mock';

@Component({
  selector: 'app-spevacka-zlozka',
  standalone: true,
  imports: [
    NgFor

  ],
  templateUrl: './spevacka-zlozka.component.html',
  styleUrl: './spevacka-zlozka.component.scss'
})
export class SpevackaZlozkaComponent {
  dataSource = SPEVACKY;
}
