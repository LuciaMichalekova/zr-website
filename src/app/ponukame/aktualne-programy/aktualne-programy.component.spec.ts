import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktualneProgramyComponent } from './aktualne-programy.component';

describe('AktualneProgramyComponent', () => {
  let component: AktualneProgramyComponent;
  let fixture: ComponentFixture<AktualneProgramyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AktualneProgramyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AktualneProgramyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
