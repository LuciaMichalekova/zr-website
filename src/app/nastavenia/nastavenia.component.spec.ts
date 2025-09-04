import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NastaveniaComponent } from './nastavenia.component';

describe('NastaveniaComponent', () => {
  let component: NastaveniaComponent;
  let fixture: ComponentFixture<NastaveniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NastaveniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NastaveniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
