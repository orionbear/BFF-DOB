const snowfalldiv = document.getElementById('snow');
const canvas = document.createElement('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("resize", function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

snowfalldiv.appendChild(canvas);

const w = canvas.width;
const h = canvas.height;

var speed = 0;

const ctx = canvas.getContext('2d');
const flakes = [];
class snowfall {

    static snowFall() {

        snowfall.addFlakes();
        snowfall.addSnow(speed);
    };

    static addFlakes() {
        const x = Math.ceil(Math.random() * w);
        const speed = Math.ceil(Math.random() * 5);
        const radius = 10 * Math.PI;

        flakes.push({
            x: x,
            y: 0,
            speed: speed,
            radius: radius
        });
        ctx.clearRect(0,0,w,h);
    };

    static addSnow(speed) {
        for (let i = 0; i < flakes.length; i++) {
            let oneFlake = flakes[i];

            // creating circles
            ctx.beginPath();
            // color the circles
            ctx.fillStyle = "white";
            
            // drawing circle
            ctx.arc(oneFlake.x -= speed  , oneFlake.y += oneFlake.speed / 2, oneFlake.speed * 0.8 ,0 , oneFlake.radius);

            ctx.fill();
        }
    };

    static Drive(){
        speed = 0.1;
    }
    static SpeedUp(){
        speed += 0.1;
    }

    static Stop(){
        speed = 0;
    }
}

setInterval(() => snowfall.snowFall(), 20);