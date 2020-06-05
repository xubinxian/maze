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

    this.randomColor = function () {
        return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${0.1 + Math.random()})`;
    }

    this.fillColor = [
        [0.1, '#993333'],
        [0.2, '#997e33'],
        [0.3, '#939933'],
        [0.4, '#569933'],
        [0.5, '#339944'],
        [0.6, '#339986'],
        [0.7, '#336199'],
        [0.8, '#5a3399'],
        [0.9, '#993396']
    ];

    this.sortColor = function (positive) {
        if (positive) {
            this.fillColor.unshift(this.fillColor.pop());
        } else {
            this.fillColor.push(this.fillColor.shift());
        }
        this.fillColor.forEach((color, i) => color[0] = 0.1 * i);
    }

    this.update = function () {
        if (this.canvas.orientation) {
            if (canvas.orientation.gamma > 0) {
                this.sortColor(true);
            } else if (canvas.orientation.gamma < 0) {
                this.sortColor();
            }
            if (canvas.orientation.beta > 0) {
                this.sortColor(true);
            } else if (canvas.orientation.beta < 0) {
                this.sortColor();
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
        radgrad.addColorStop(1, '#000222');
        this.fillColor.forEach(color => radgrad.addColorStop(...color));

        ctx.fillStyle = radgrad;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}