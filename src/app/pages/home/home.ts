import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTreeModule } from '@angular/material/tree';
import {SplineViewer} from '../../components/spline-viewer/spline-viewer'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,

    MatTreeModule,
    SplineViewer   // <-- Import here
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  folderOpen = true;
  selectedFile: string | null = 'programming';

  toggleFolder() {
    this.folderOpen = !this.folderOpen;
  }

  openFile(file: string) {
    this.selectedFile = file;
  }
}
