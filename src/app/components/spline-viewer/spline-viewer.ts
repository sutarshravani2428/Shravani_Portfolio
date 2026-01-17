import { Component, NgZone, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spline-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spline-viewer.html',
  styleUrls: ['./spline-viewer.css']
})
export class SplineViewer implements OnInit {

  showSpline = false;
  isMobile = false;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 768;

    if (!this.isMobile) {
      // Run timeout outside Angular for performance
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          // Update inside Angular so *ngIf works
          this.ngZone.run(() => {
            this.showSpline = true;
            this.cdr.detectChanges(); // ensures Angular notices change
          });
        }, 500); // lazy load after 0.5s
      });
    }
  }
}
