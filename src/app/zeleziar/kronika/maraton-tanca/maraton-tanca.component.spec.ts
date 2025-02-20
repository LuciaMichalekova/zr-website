import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaratonTancaComponent } from './maraton-tanca.component';

describe('MaratonTancaComponent', () => {
  let component: MaratonTancaComponent;
  let fixture: ComponentFixture<MaratonTancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaratonTancaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaratonTancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
