import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktualitaComponent } from './aktualita.component';

describe('AktualitaComponent', () => {
  let component: AktualitaComponent;
  let fixture: ComponentFixture<AktualitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AktualitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AktualitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
