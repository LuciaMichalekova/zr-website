import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivVystupeniComponent } from './archiv-vystupeni.component';

describe('ArchivVystupeniComponent', () => {
  let component: ArchivVystupeniComponent;
  let fixture: ComponentFixture<ArchivVystupeniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivVystupeniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivVystupeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
