export class FaceSnap {

    location?: string;

    constructor(
        public title: string, 
        public imageUrl: string,
        public description: string, 
        public createdAt: Date, 
        public snaps: number) {}


    removeLike() {
        this.snaps--;
        
    }
    addLike() {
        this.snaps++;
    }

    setLocation(location: string): void {
        this.location = location;
    }
        
}