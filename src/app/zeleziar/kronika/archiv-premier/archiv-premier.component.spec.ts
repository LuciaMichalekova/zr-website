import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivPremierComponent } from './archiv-premier.component';

describe('ArchivPremierComponent', () => {
  let component: ArchivPremierComponent;
  let fixture: ComponentFixture<ArchivPremierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivPremierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivPremierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
