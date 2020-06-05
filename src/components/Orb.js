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
    this.speed = 4.85;

    this.update = function () {
        if (this.canvas.orientation) {
            if (canvas.orientation.gamma > 0) {
                this.xCoordinate += this.speed;
            } else if (canvas.orientation.gamma < 0) {
                this.xCoordinate -= this.speed;
            }
            if (canvas.orientation.beta > 0) {
                this.yCoordinate += this.speed;
            } else if (canvas.orientation.beta < 0) {
                this.yCoordinate -= this.speed;
            }
            // Prevent orbs from going off screen
            this.xCoordinate = Math.max(Math.min(this.xCoordinate, canvas.width - this.radius), 0 + this.radius);
            this.yCoordinate = Math.max(Math.min(this.yCoordinate, canvas.height - this.radius), 0 + this.radius);
        }
        this.draw();
    }

    this.draw = function () {
        // Create gradients  
        var ctx = this.context;
        var radgrad = ctx.createRadialGradient(this.xCoordinate, this.yCoordinate, 0, this.xCoordinate, this.yCoordinate, radius);
        radgrad.addColorStop(0, '#eacb76');
        radgrad.addColorStop(0.9, '#ff4e20');
        radgrad.addColorStop(1, '#3d3b4f');

        ctx.fillStyle = radgrad;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}