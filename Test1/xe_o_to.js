let ctx = document.getElementById('MyCanvas').getContext("2d");

function Car(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.speedX = 10;
    this.speedY = 10;

    this.draw = function () {
        let image = document.getElementById(this.id);
        ctx.drawImage(image, this.x, this.y, 100, 100);
        this.check();
    }

    this.movedown = function () {
        this.y += this.speedY;
    }
    this.moveup = function () {
        this.y -=this.speedY;
    }
    this.moveleft = function () {
        this.x -= this.speedX;
    }
    this.moveright = function () {
        this.x += this.speedX;
    }
    this.check = function () {
        if (this.x>900){
            this.x=0;
        }else if (this.x<0){
            this.x = 900;
        }else if (this.y>450){
            this.y=0;
        }else if (this.y<0){
            this.y=450;
        }
    }
}

let finalx = 100;
let finaly = 100;
let car = new Car("imgup",finalx,finaly);
car.draw();

function init() {
    window.addEventListener('keydown',function (evt){
        switch (evt.keyCode) {
            case 38 :
                ctx.clearRect(0,0,1200,1200);
                car.id = "imgup";
                car.moveup();
                car.draw();
                console.log(finaly)
                break;
            case 37 :
                ctx.clearRect(0,0,1200,1200);
                car.id="imgleft";
                car.moveleft();
                car.draw();
                break;
            case 39:
                ctx.clearRect(0,0,1200,1200);
                car.id = "imgright";
                car.moveright();
                car.draw();
                break;
            case 40:
                ctx.clearRect(0,0,1200,1200);
                car.id="imgdown";
                car.movedown();
                car.draw();
                break;
        }
    })
}


