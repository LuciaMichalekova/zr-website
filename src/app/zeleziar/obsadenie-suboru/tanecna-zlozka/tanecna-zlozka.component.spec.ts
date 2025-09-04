import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanecnaZlozkaComponent } from './tanecna-zlozka.component';

describe('TanecnaZlozkaComponent', () => {
  let component: TanecnaZlozkaComponent;
  let fixture: ComponentFixture<TanecnaZlozkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TanecnaZlozkaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanecnaZlozkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
