import Point from './Point.js'

class Bezier4 {
    t: number;
    points: Array<Point|null>;

    constructor(){
        this.t = 0;
        this.points = new Array<Point>(4);
        this.setPoints(null, null, null, null);
    }

    public static getNPoints(){
        return 4;
    }

    setPoint(Pindex: number, P: Point){
        if(Pindex < 0 || Pindex > 3){
            new Error("Pindex must be between 0 and 3");
        }
        this.points[Pindex] = P;
    }

    setPoints(P1: Point|null, P2: Point|null, P3: Point|null, P4: Point|null){
        this.points[0] = P1;
        this.points[1] = P2;
        this.points[2] = P3;
        this.points[3] = P4;
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
        res.x = this.points[0]!.x * Math.pow(1 - t, 3) + 
        3 * this.points[1]!.x * t * Math.pow(1 - t, 2) + 
        3 * this.points[2]!.x * Math.pow(t, 2) * (1 - t) + 
        this.points[3]!.x * Math.pow(t, 3);

        res.y = this.points[0]!.y * Math.pow(1 - t, 3) + 
        3 * this.points[1]!.y * t * Math.pow(1 - t, 2) + 
        3 * this.points[2]!.y * Math.pow(t, 2) * (1 - t) + 
        this.points[3]!.y * Math.pow(t, 3);

        return res;
    }

    printValues(tPoints: number){
        for(let i = 0; i < tPoints; i++){
            let t = i / tPoints;
            let p = this.bezierAt(t);
            console.log("t: " + t + " x: " + p.x + " y: " + p.y);
        }
    }

    drawBezier(ctx: CanvasRenderingContext2D, tPoints: number){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        
        for(let p of this.points){
            ctx.strokeStyle = 'red';
            let radius = 2;
            ctx.beginPath();
            ctx.arc(p.x, p.y, radius, 0, 2*Math.PI);
            ctx.stroke();
        }

        ctx.strokeStyle = 'black';
        ctx.moveTo(this.points[0]!.x, this.points[0]!.y);
        for(let i = 0; i <= tPoints; i++){
            let t = i / tPoints;
            let p = this.bezierAt(t);
            ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
    }
}

export default Bezier4;