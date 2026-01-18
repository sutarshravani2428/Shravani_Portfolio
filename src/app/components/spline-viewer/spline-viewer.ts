import {
  Component,
  NgZone,
  OnInit,
  ChangeDetectorRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-spline-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spline-viewer.html',
  styleUrls: ['./spline-viewer.css'],
})
export class SplineViewer implements OnInit {
  showSpline = false;
  isMobile = false;
  private isBrowser = false;

  constructor(
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // ⛔ STOP COMPLETELY ON SERVER
    if (!this.isBrowser) return;

    // ✅ Safe to use window now
    this.isMobile = window.innerWidth < 768;

    if (!this.isMobile) {
      // Run timeout outside Angular for performance
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          // Re-enter Angular zone to update UI
          this.ngZone.run(() => {
            this.showSpline = true;
            this.cdr.detectChanges();
          });
        }, 500);
      });
    }
  }
}
