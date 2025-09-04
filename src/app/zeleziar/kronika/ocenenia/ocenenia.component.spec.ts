import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceneniaComponent } from './ocenenia.component';

describe('OceneniaComponent', () => {
  let component: OceneniaComponent;
  let fixture: ComponentFixture<OceneniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OceneniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OceneniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
