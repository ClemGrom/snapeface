import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapService } from '../services/face-snaps.services';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  
  faceSnaps!: FaceSnap[];
  
  constructor(private faceSnapsService: FaceSnapService) {
  }
  
  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
    
    this.faceSnaps[1].setLocation("Dans l'espace");
    this.faceSnaps[2].setLocation("Paris");
  }
}
