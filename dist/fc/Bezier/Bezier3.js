var Bezier3 = /** @class */ (function () {
    function Bezier3() {
        this.t = 0;
        this.points = new Array(3);
        this.setPoints(null, null, null);
    }
    Bezier3.getNPoints = function () {
        return 3;
    };
    Bezier3.prototype.setPoint = function (Pindex, P) {
        if (Pindex < 0 || Pindex > 2) {
            new Error("Pindex must be between 0 and 2");
        }
        this.points[Pindex] = P;
    };
    Bezier3.prototype.setPoints = function (P1, P2, P3) {
        this.points[0] = P1;
        this.points[1] = P2;
        this.points[2] = P3;
    };
    Bezier3.prototype.bezierAt = function (t) {
        if (t < 0 || t > 1) {
            new Error("t must be between 0 and 1");
        }
        for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p == null) {
                new Error("Bezier points cannot be null when calculating coordinates at t");
            }
        }
        var res = { x: 0, y: 0 };
        res.x = this.points[0].x * Math.pow(1 - t, 2)
            + 2 * this.points[1].x * t * (1 - t)
            + this.points[2].x * Math.pow(t, 2);
        res.y = this.points[0].y * Math.pow(1 - t, 2)
            + 2 * this.points[1].y * t * (1 - t)
            + this.points[2].y * Math.pow(t, 2);
        return res;
    };
    Bezier3.prototype.printValues = function (tPoints) {
        for (var i = 0; i < tPoints; i++) {
            var t = i / tPoints;
            var p = this.bezierAt(t);
            console.log("t: " + t + " x: " + p.x + " y: " + p.y);
        }
    };
    Bezier3.prototype.drawBezier = function (ctx, tPoints) {
        this.checkPoints();
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
            var p = _a[_i];
            ctx.strokeStyle = 'red';
            var radius = 2;
            ctx.beginPath();
            ctx.arc(p.x, p.y, radius, 0, 2 * Math.PI);
            ctx.stroke();
        }
        ctx.strokeStyle = 'black';
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (var i = 0; i <= tPoints; i++) {
            var t = i / tPoints;
            var p = this.bezierAt(t);
            ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
    };
    Bezier3.prototype.checkPoints = function () {
        for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p == null) {
                new Error("Bezier points cannot be null when computing coordinates");
            }
        }
        return true;
    };
    return Bezier3;
}());
export default Bezier3;
