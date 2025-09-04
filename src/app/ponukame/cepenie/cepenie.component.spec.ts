import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepenieComponent } from './cepenie.component';

describe('CepenieComponent', () => {
  let component: CepenieComponent;
  let fixture: ComponentFixture<CepenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CepenieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CepenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
