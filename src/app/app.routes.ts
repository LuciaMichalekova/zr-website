import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AktualityComponent } from './aktuality/aktuality.component';
import { KontaktyComponent } from './kontakty/kontakty.component';
import { AktualneProgramyComponent } from './ponukame/aktualne-programy/aktualne-programy.component';
import { KurzLudovychTancovComponent } from './ponukame/kurz-ludovych-tancov/kurz-ludovych-tancov.component';
import { PozicovnaKrojovComponent } from './ponukame/pozicovna-krojov/pozicovna-krojov.component';
import { ProduktyComponent } from './ponukame/produkty/produkty.component';
import { PredstaveniaComponent } from './predstavenia/predstavenia.component';
import { ONasComponent } from './zeleziar/o-nas/o-nas.component';
import { ArchivPremierComponent } from './zeleziar/kronika/archiv-premier/archiv-premier.component';
import { ArchivVystupeniComponent } from './zeleziar/kronika/archiv-vystupeni/archiv-vystupeni.component';
import { MaratonTancaComponent } from './zeleziar/kronika/maraton-tanca/maraton-tanca.component';
import { OsobnostiSuboruComponent } from './zeleziar/kronika/osobnosti-suboru/osobnosti-suboru.component';
import { OceneniaComponent } from './zeleziar/kronika/ocenenia/ocenenia.component';
import { GaleriaComponent } from './zeleziar/galeria/galeria.component';
import { UmeleckeVedenieComponent } from './zeleziar/obsadenie-suboru/umelecke-vedenie/umelecke-vedenie.component';
import { TanecnaZlozkaComponent } from './zeleziar/obsadenie-suboru/tanecna-zlozka/tanecna-zlozka.component';
import { HudobnaZlozkaComponent } from './zeleziar/obsadenie-suboru/hudobna-zlozka/hudobna-zlozka.component';
import { SpevackaZlozkaComponent } from './zeleziar/obsadenie-suboru/spevacka-zlozka/spevacka-zlozka.component';
import { CepenieComponent } from './ponukame/cepenie/cepenie.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'aktuality', component: AktualityComponent },
    { path: 'kontakty', component: KontaktyComponent },
    { path: 'ponukame/aktualne-programy', component: AktualneProgramyComponent},
    { path: 'ponukame/kurz-ludovych-tancov', component: KurzLudovychTancovComponent },
    { path: 'ponukame/pozicovna-krojov', component: PozicovnaKrojovComponent },
    { path: 'ponukame/produkty', component: ProduktyComponent },
    { path: 'ponukame/cepenie', component: CepenieComponent },
    { path: 'predstavenia', component: PredstaveniaComponent},
    { path: 'zeleziar/o-nas', component: ONasComponent},
    { path: 'zeleziar/kronika/archiv-premier', component: ArchivPremierComponent},
    { path: 'zeleziar/kronika/maraton-tanca', component: MaratonTancaComponent},
    { path: 'zeleziar/kronika/osobnosti-suboru', component: OsobnostiSuboruComponent},
    { path: 'zeleziar/kronika/archiv-vystupeni', component: ArchivVystupeniComponent},
    { path: 'zeleziar/kronika/ocenenia', component: OceneniaComponent},
    { path: 'zeleziar/galeria', component: GaleriaComponent},
    { path: 'zeleziar/obsadenie-suboru/umelecke-vedenie', component: UmeleckeVedenieComponent},
    { path: 'zeleziar/obsadenie-suboru/tanecna-zlozka', component: TanecnaZlozkaComponent},
    { path: 'zeleziar/obsadenie-suboru/hudobna-zlozka', component: HudobnaZlozkaComponent},
    { path: 'zeleziar/obsadenie-suboru/spevacka-zlozka', component: SpevackaZlozkaComponent},
];
