import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';


@Injectable({
providedIn: 'root'
}  
)

export class FaceSnapService {
    private faceSnaps: FaceSnap[] = [
        
            new FaceSnap("Ryan Gosling","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQgSvVwAdK_66hOT_ut0rKqjeYbqeD7qfjN31wUqpfiNKTAqhFv", "l'acteur le plus sexy de la planète", new Date(), 11, ),
            new FaceSnap("Wall-E","https://upload.wikimedia.org/wikipedia/en/thumb/6/68/WALL-E_%28character%29.png/170px-WALL-E_%28character%29.png", "le robot le plus mignon de la planète", new Date(), 8898, ),
            new FaceSnap("Singe","https://img.lemde.fr/2017/09/14/78/0/530/530/664/0/75/0/b1cc6f0_11665-1ccfe6c.e9jduqh0k9.jpg", "singe qui sourit", new Date(), 100000, )
        
    ];
 
  getFaceSnaps() {
    return [...this.faceSnaps];
  }
}