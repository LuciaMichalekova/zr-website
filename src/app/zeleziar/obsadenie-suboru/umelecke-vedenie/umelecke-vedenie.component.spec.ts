import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmeleckeVedenieComponent } from './umelecke-vedenie.component';

describe('UmeleckeVedenieComponent', () => {
  let component: UmeleckeVedenieComponent;
  let fixture: ComponentFixture<UmeleckeVedenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UmeleckeVedenieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmeleckeVedenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
