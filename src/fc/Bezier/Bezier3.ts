import Point from './Point.js'

class Bezier3 {
    t: number;
    points: Array<Point|null>;

    constructor(){
        this.t = 0;
        this.points = new Array<Point>(3);
        this.setPoints(null, null, null);
    }

    public static getNPoints(){
        return 3;
    }

    setPoint(Pindex: number, P: Point){
        if(Pindex < 0 || Pindex > 2){
            new Error("Pindex must be between 0 and 2");
        }
        this.points[Pindex] = P;
    }

    setPoints(P1: Point|null, P2: Point|null, P3: Point|null){
        this.points[0] = P1;
        this.points[1] = P2;
        this.points[2] = P3;
    }

    bezierAt(t: number){
        if(t < 0 || t > 1){
            new Error("t must be between 0 and 1");
        }
        for(let p of this.points){
            if( p == null ) {
                new Error("Bezier points cannot be null when calculating coordinates at t");
            }
        }

        let res:Point = {x: 0, y: 0};

        res.x = this.points[0]!.x * Math.pow(1 - t, 2) 
        + 2 * this.points[1]!.x * t * (1 - t) 
        + this.points[2]!.x * Math.pow(t, 2);

        res.y = this.points[0]!.y * Math.pow(1 - t, 2) 
        + 2 * this.points[1]!.y * t * (1 - t) 
        + this.points[2]!.y * Math.pow(t, 2);

        return res;
    }
}

export default Bezier3;