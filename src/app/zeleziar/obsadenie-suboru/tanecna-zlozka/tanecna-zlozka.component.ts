import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TANECNICI } from '../../../shared/clenovia-mock';

@Component({
  selector: 'app-tanecna-zlozka',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './tanecna-zlozka.component.html',
  styleUrl: './tanecna-zlozka.component.scss'
})
export class TanecnaZlozkaComponent {
  dataSource = TANECNICI;
}
