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
import { UmeleckeVedenieComponent } from './zeleziar/obsadenie-suboru/umelecke-vedenie/umelecke-vedenie.component';
import { TanecnaZlozkaComponent } from './zeleziar/obsadenie-suboru/tanecna-zlozka/tanecna-zlozka.component';
import { HudobnaZlozkaComponent } from './zeleziar/obsadenie-suboru/hudobna-zlozka/hudobna-zlozka.component';
import { SpevackaZlozkaComponent } from './zeleziar/obsadenie-suboru/spevacka-zlozka/spevacka-zlozka.component';
import { CepenieComponent } from './ponukame/cepenie/cepenie.component';
import { NastaveniaComponent } from './nastavenia/nastavenia.component';
import { AktualitaComponent } from './aktuality/aktualita/aktualita.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'aktuality', component: AktualityComponent },
    { path: 'kontakty', component: KontaktyComponent },
    { path: 'aktualne-programy', component: AktualneProgramyComponent},
    { path: 'kurz-ludovych-tancov', component: KurzLudovychTancovComponent },
    { path: 'pozicovna-krojov', component: PozicovnaKrojovComponent },
    { path: 'produkty', component: ProduktyComponent },
    { path: 'cepenie', component: CepenieComponent },
    { path: 'predstavenia', component: PredstaveniaComponent},
    { path: 'o-nas', component: ONasComponent},
    { path: 'archiv-premier', component: ArchivPremierComponent},
    { path: 'maraton-tanca', component: MaratonTancaComponent},
    { path: 'osobnosti-suboru', component: OsobnostiSuboruComponent},
    { path: 'archiv-vystupeni', component: ArchivVystupeniComponent},
    { path: 'umelecke-vedenie', component: UmeleckeVedenieComponent},
    { path: 'tanecna-zlozka', component: TanecnaZlozkaComponent},
    { path: 'hudobna-zlozka', component: HudobnaZlozkaComponent},
    { path: 'spevacka-zlozka', component: SpevackaZlozkaComponent},
    { path: 'nastavenia', component: NastaveniaComponent},
    { path: 'aktuality/:slug', component: AktualitaComponent },
];
