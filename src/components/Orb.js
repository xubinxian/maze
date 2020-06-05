export default function Orb(radius, fillColor, canvas) {
    this.radius = radius;
    this.fillColor = fillColor;

    // Prevent orbs from spawning past the canvas boundaries
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.xCoordinate = this.canvas.width / 2;
    this.yCoordinate = this.canvas.height / 2;
    this.xVelocity = Math.random() * 2 - 1;
    this.yVelocity = Math.random() * 2 - 1;
    this.gravity = .15;
    this.xShift = 0;
    this.yShift = 0;
    this.friction = .83;

    this.update = function () {
        if (canvas.loc) {
            if (canvas.loc.alpha > 0) {
                this.xCoordinate += 2 + 3 * Math.random();
            } else if (canvas.loc.alpha < 0) {
                this.xCoordinate -= 2 + 3 * Math.random();
            }
            if (canvas.loc.beta > 0) {
                this.yCoordinate += 2 + 3 * Math.random();
            } else if (canvas.loc.beta < 0) {
                this.yCoordinate -= 2 + 3 * Math.random();
            }
            // Prevent orbs from going off screen
            this.xCoordinate = Math.max(Math.min(this.xCoordinate, canvas.width - this.radius), 0 + this.radius);
            this.yCoordinate = Math.max(Math.min(this.yCoordinate, canvas.height - this.radius), 0 + this.radius);
        }

        this.draw();
    }

    this.draw = function () {
        // View variables if needed
        // c.fillText("yCoordinate:"+ Math.floor(this.yCoordinate),this.xCoordinate + 40,this.yCoordinate);
        // c.fillText("yVelocity:"+ Math.floor(this.yVelocity),this.xCoordinate + 40,this.yCoordinate + 20);
        // c.fillText("xShift: " + this.xShift ,this.xCoordinate + 40,this.yCoordinate + 40);

        // Create gradients  
        var ctx = this.context;
        var radgrad = ctx.createRadialGradient(this.xCoordinate, this.yCoordinate, 0, this.xCoordinate, this.yCoordinate, radius);
        radgrad.addColorStop(0, '#A7D30C');
        radgrad.addColorStop(0.9, '#019F62');
        radgrad.addColorStop(1, 'rgba(1,159,98,0)');

        var radgrad2 = ctx.createRadialGradient(this.xCoordinate, this.yCoordinate, 0, this.xCoordinate, this.yCoordinate, radius);
        radgrad2.addColorStop(0, '#FF5F98');
        radgrad2.addColorStop(0.75, '#FF0188');
        radgrad2.addColorStop(1, 'rgba(255,1,136,0)');

        var radgrad3 = ctx.createRadialGradient(this.xCoordinate, this.yCoordinate, 0, this.xCoordinate, this.yCoordinate, radius);
        radgrad3.addColorStop(0, '#00C9FF');
        radgrad3.addColorStop(0.8, '#00B5E2');
        radgrad3.addColorStop(1, 'rgba(0,201,255,0)');

        var radgrad4 = ctx.createRadialGradient(this.xCoordinate, this.yCoordinate, 0, this.xCoordinate, this.yCoordinate, radius);
        radgrad4.addColorStop(0, '#F4F201');
        radgrad4.addColorStop(0.8, '#E4C700');
        radgrad4.addColorStop(1, 'rgba(228,199,0,0)');


        ctx.fillStyle = radgrad;
        // ctx.arc(this.xCoordinate, this.yCoordinate, this.radius, 0, 2 * Math.PI, false);
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        // draw shapes  
        // ctx.fillStyle = radgrad4;
        // ctx.fillRect(0, 0, 150, 150);
        // ctx.fillStyle = radgrad3;
        // ctx.fillRect(0, 0, 150, 150);
        // ctx.fillStyle = radgrad2;
        // ctx.fillRect(0, 0, 150, 150);
        // ctx.fillStyle = radgrad;
        // ctx.fillRect(0, 0, 150, 150);
    }
}