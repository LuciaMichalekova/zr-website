import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HudobnaZlozkaComponent } from './hudobna-zlozka.component';

describe('HudobnaZlozkaComponent', () => {
  let component: HudobnaZlozkaComponent;
  let fixture: ComponentFixture<HudobnaZlozkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HudobnaZlozkaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HudobnaZlozkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
