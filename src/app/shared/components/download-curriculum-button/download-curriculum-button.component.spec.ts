import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCurriculumButtonComponent } from './download-curriculum-button.component';

describe('DownloadCurriculumButtonComponent', () => {
  let component: DownloadCurriculumButtonComponent;
  let fixture: ComponentFixture<DownloadCurriculumButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadCurriculumButtonComponent]
    });
    fixture = TestBed.createComponent(DownloadCurriculumButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
