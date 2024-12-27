import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KronikaComponent } from './kronika.component';

describe('KronikaComponent', () => {
  let component: KronikaComponent;
  let fixture: ComponentFixture<KronikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KronikaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KronikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
