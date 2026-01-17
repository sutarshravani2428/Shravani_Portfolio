import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplineViewer } from './spline-viewer';

describe('SplineViewer', () => {
  let component: SplineViewer;
  let fixture: ComponentFixture<SplineViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplineViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplineViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
