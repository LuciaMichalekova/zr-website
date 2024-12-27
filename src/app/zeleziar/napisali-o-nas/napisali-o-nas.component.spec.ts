import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapisaliONasComponent } from './napisali-o-nas.component';

describe('NapisaliONasComponent', () => {
  let component: NapisaliONasComponent;
  let fixture: ComponentFixture<NapisaliONasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NapisaliONasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NapisaliONasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
