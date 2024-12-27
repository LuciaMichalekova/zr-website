import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredstaveniaComponent } from './predstavenia.component';

describe('PredstaveniaComponent', () => {
  let component: PredstaveniaComponent;
  let fixture: ComponentFixture<PredstaveniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredstaveniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredstaveniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
