import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpevackaZlozkaComponent } from './spevacka-zlozka.component';

describe('SpevackaZlozkaComponent', () => {
  let component: SpevackaZlozkaComponent;
  let fixture: ComponentFixture<SpevackaZlozkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpevackaZlozkaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpevackaZlozkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
