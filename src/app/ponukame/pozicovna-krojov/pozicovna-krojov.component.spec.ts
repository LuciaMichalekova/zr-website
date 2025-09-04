import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PozicovnaKrojovComponent } from './pozicovna-krojov.component';

describe('PozicovnaKrojovComponent', () => {
  let component: PozicovnaKrojovComponent;
  let fixture: ComponentFixture<PozicovnaKrojovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PozicovnaKrojovComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PozicovnaKrojovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
