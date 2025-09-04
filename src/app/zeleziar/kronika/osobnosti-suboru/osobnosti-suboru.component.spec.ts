import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobnostiSuboruComponent } from './osobnosti-suboru.component';

describe('OsobnostiSuboruComponent', () => {
  let component: OsobnostiSuboruComponent;
  let fixture: ComponentFixture<OsobnostiSuboruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OsobnostiSuboruComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsobnostiSuboruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
