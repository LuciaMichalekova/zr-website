import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurzLudovychTancovComponent } from './kurz-ludovych-tancov.component';

describe('KurzLudovychTancovComponent', () => {
  let component: KurzLudovychTancovComponent;
  let fixture: ComponentFixture<KurzLudovychTancovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KurzLudovychTancovComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KurzLudovychTancovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
