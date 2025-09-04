import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { PREDSTAVENIA } from '../shared/predstavenia-mock';
import { Predstavenie } from '../models/Predstavenie';
import { AKTUALITY } from '../shared/aktuality-mock';
import { HUDOBNICI, SPEVACKY, TANECNICI, VEDENIE } from '../shared/clenovia-mock';
import { PREMIERY } from '../shared/premiery-mock';

@Component({
  selector: 'app-nastavenia',
  standalone: true,
  imports: [
    MatExpansionModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './nastavenia.component.html',
  styleUrl: './nastavenia.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NastaveniaComponent {
  readonly panelOpenState = signal(false);
  selectedTime: string = '';

  performanceColumns: string[] = ['date', 'time', 'duration', 'city', 'place', 'name', 'info', 'tickets', 'functions'];
  performances = PREDSTAVENIA;
  actualitiesColumns: string[] = ['title', 'titleImage', 'text', 'images', 'functions'];
  actualities = AKTUALITY;
  membersColumns: string[] = ['name', 'image', 'functions'];
  singers = SPEVACKY;
  dancers = TANECNICI;
  musicians = HUDOBNICI;
  leadership = VEDENIE; 
  premiere = PREMIERY
  premiereColumns: string[] = ['date', 'city', 'place', 'name', 'info', 'functions'];
}
