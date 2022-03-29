class Tertia {

    constructor(x,y) {
        this.pos = translate(x,y);
    }

    invoke() {
        v = p5.Vector.random2D();
        t = p5.Vector.random2D();
        v.mult(random(50, 90));
        t.mult(random(50, 100));


        strokeWeight(1);
        translate(400, 400);
        stroke(0, 255, 0);
        fill(0,50,0);
        circle(0,0,15);

        var distOrig = random(.20,.50);
        line(v.x*distOrig, v.y*distOrig, v.x, v.y);
        line(t.x*distOrig, t.y*distOrig, t.x, t.y);
        
    }

}