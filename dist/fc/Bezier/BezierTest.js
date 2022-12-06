import Bezier4 from "./Bezier4.js";
import Bezier3 from "./Bezier3.js";
export function Bezier4Test() {
    var bezier = new Bezier4();
    bezier.setPoint(0, { x: 100, y: 100 });
    bezier.setPoint(1, { x: 200, y: 200 });
    bezier.setPoint(2, { x: 300, y: 100 });
    bezier.setPoint(3, { x: 400, y: 200 });
    bezier.printValues(100);
}
export function bezier4DrawTest() {
    var canvas = document.getElementById("bezier");
    var ctx = canvas.getContext("2d");
    var bezier = new Bezier4();
    bezier.setPoint(0, { x: 100, y: 100 });
    bezier.setPoint(1, { x: 200, y: 200 });
    bezier.setPoint(2, { x: 300, y: 100 });
    bezier.setPoint(3, { x: 400, y: 200 });
    bezier.drawBezier(ctx, 100);
}
export function Bezier3Test() {
    var bezier = new Bezier3();
    bezier.setPoint(0, { x: 100, y: 100 });
    bezier.setPoint(1, { x: 200, y: 200 });
    bezier.setPoint(2, { x: 300, y: 100 });
    bezier.printValues(100);
}
export function bezier3DrawTest() {
    var canvas = document.getElementById("bezier");
    var ctx = canvas.getContext("2d");
    var bezier = new Bezier3();
    bezier.setPoint(0, { x: 100, y: 100 });
    bezier.setPoint(1, { x: 800, y: 600 });
    bezier.setPoint(2, { x: 1000, y: 200 });
    bezier.drawBezier(ctx, 1000);
}
