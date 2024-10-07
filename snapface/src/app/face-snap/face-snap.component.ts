import { Component,Input,OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle,NgClass, UpperCasePipe, DatePipe,DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    DecimalPipe 
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
@Input() faceSnap!: FaceSnap;

 title!: string ;
 description!: string;
 createdAt!: Date;
 snaps!: number;
 imageUrl!: string;
 snapButtonText!:string
 userSnaped!:boolean;

 ngOnInit(): void {
  // this.title = "Ryan Gosling";
  // this.description = "l'acteur le plus sexy de la planète";
  // this.createdAt = new Date();
  // this.snaps = 0;
  this.snapButtonText="Like";
  // this.imageUrl = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgSvVwAdK_66hOT_ut0rKqjeYbqeD7qfjN31wUqpfiNKTAqhFv";
 }

onLike() {
  if (this.userSnaped) {
    this.onRemoveLike();
  } else {
    this.onAddLike();
  }
}

onRemoveLike() {
  this.faceSnap.removeLike();
  this.userSnaped = false;
  this.snapButtonText = "Unlike";
}

onAddLike(){
  this.faceSnap.addLike();
  this.snapButtonText = "Like";
  this.userSnaped = true;

}



}
