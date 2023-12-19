import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDownloaderComponent } from './image-downloader.component';

describe('ImageDownloaderComponent', () => {
  let component: ImageDownloaderComponent;
  let fixture: ComponentFixture<ImageDownloaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageDownloaderComponent]
    });
    fixture = TestBed.createComponent(ImageDownloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
