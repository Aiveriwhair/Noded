import Bezier4 from "./Bezier4.js";

export function BezierTest() {
    let bezier = new Bezier4();

    bezier.setPoint(0, {x:100, y:100});
    bezier.setPoint(1, {x:200, y:200});
    bezier.setPoint(2, {x:300, y:100});
    bezier.setPoint(3, {x:400, y:200});

    bezier.printValues(100);
}

export function bezierDrawTest(){
    let canvas = document.getElementById("bezier") as HTMLCanvasElement;
    let ctx = canvas.getContext("2d")!;

    let bezier = new Bezier4();

    bezier.setPoint(0, {x:100, y:100});
    bezier.setPoint(1, {x:200, y:200});
    bezier.setPoint(2, {x:300, y:100});
    bezier.setPoint(3, {x:400, y:200});

    bezier.drawBezier(ctx, 100);
}
