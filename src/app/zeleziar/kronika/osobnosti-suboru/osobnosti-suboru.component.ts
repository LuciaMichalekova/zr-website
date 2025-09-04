import { Component, } from '@angular/core';
import { NgFor } from '@angular/common';
import { ASISTENI_CHOREOGRAFA, KROJARKY, ORGANIZACNI_VEDUCI, PEDAGOGOVIA, UMELECKE_VEDENIE, VEDUCI_LUDOVEJ_HUDBY, VEDUCI_SPEVACKEJ_ZLOZKY, VEDUCI_TANECNEJ_ZLOZKY } from '../../../shared/osobnosti';

@Component({
  selector: 'app-osobnosti-suboru',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './osobnosti-suboru.component.html',
  styleUrl: './osobnosti-suboru.component.scss'
})
export class OsobnostiSuboruComponent {
  umeleckeVedenie = UMELECKE_VEDENIE;
  asistentChoreografa = ASISTENI_CHOREOGRAFA;
  krojarky = KROJARKY;   
  organizacniVeduci = ORGANIZACNI_VEDUCI;
  pedagogovia = PEDAGOGOVIA;
  veduciTanecnejZlozky = VEDUCI_TANECNEJ_ZLOZKY;
  veduciSpevackejZlozky = VEDUCI_SPEVACKEJ_ZLOZKY;
  veduciLudovejHudby = VEDUCI_LUDOVEJ_HUDBY;
}
