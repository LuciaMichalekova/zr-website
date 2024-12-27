import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HUDOBNICI } from '../../../shared/clenovia-mock';

@Component({
  selector: 'app-hudobna-zlozka',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './hudobna-zlozka.component.html',
  styleUrl: './hudobna-zlozka.component.scss'
})
export class HudobnaZlozkaComponent {
  dataSource = HUDOBNICI;
}
