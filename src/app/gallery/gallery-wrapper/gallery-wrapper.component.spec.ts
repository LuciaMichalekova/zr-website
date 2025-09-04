import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryWrapperComponent } from './gallery-wrapper.component';

describe('GalleryWrapperComponent', () => {
  let component: GalleryWrapperComponent;
  let fixture: ComponentFixture<GalleryWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
