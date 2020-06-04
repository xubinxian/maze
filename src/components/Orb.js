export default function Orb(radius, fillColor, canvas) {
    this.radius = radius;
    this.fillColor = fillColor;

    // Prevent orbs from spawning past the canvas boundaries
    this.xCoordinate = this.radius + (canvas.width - this.radius * 2) * Math.random();
    this.yCoordinate = this.radius + (canvas.height - this.radius * 2) * Math.random();
    this.xVelocity = Math.random() * 2 - 1;
    this.yVelocity = Math.random() * 2 - 1;
    this.gravity = .15;
    this.xShift = 0;
    this.yShift = 0;
    this.friction = .83;
    this.c = canvas.getContext('2d');
    var mouseX = canvas.width / 2;
    var mouseY = canvas.height / 2;

    this.update = function () {
        if (canvas.pullTowardsMouse == true) {
            this.xShift += (mouseX - this.xShift) * 0.05;
            this.yShift += (mouseY - this.yShift) * 0.05;

            // Create circling effect when mouse is down
            this.xCoordinate = this.xShift + Math.sin(this.xVelocity) * 50;
            this.yCoordinate = this.yShift + Math.cos(this.yVelocity) * 50;

            // Increment velocity --- The longer you hold, the more powerful the burst
            if (this.xVelocity < 0) {
                this.xVelocity -= (Math.random() * 0.15);
            } else {
                this.xVelocity += (Math.random() * 0.15);
            };

            if (this.yVelocity < 0) {
                this.yVelocity -= (Math.random() * 0.15);
            } else {
                this.yVelocity += (Math.random() * 0.15);
            };

            // Prevent orbs from going off screen
            this.xCoordinate = Math.max(Math.min(this.xCoordinate, canvas.width - this.radius), 0 + this.radius);
            this.yCoordinate = Math.max(Math.min(this.yCoordinate, canvas.height - this.radius), 0 + this.radius);

        } else {
            if (this.xCoordinate + this.radius + this.xVelocity > canvas.width || this.xCoordinate - this.radius + this.xVelocity < 0) {
                this.xVelocity = -this.xVelocity * this.friction;
            }
            if (this.yCoordinate + this.radius + this.yVelocity > canvas.height || this.yCoordinate - this.radius + this.yVelocity < 0) {
                this.yVelocity = -this.yVelocity * this.friction;
                this.xVelocity = this.xVelocity * 0.99;

            } else {
                this.yVelocity += this.gravity;
            }

            this.xCoordinate = this.xCoordinate + this.xVelocity;
            this.yCoordinate = this.yCoordinate + this.yVelocity;

            // Store the current position of the x and y coordinates for a smooth shift
            this.xShift = this.xCoordinate;
            this.yShift = this.yCoordinate;
        }

        this.draw();
    }

    this.draw = function () {
        // View variables if needed
        // c.fillText("yCoordinate:"+ Math.floor(this.yCoordinate),this.xCoordinate + 40,this.yCoordinate);
        // c.fillText("yVelocity:"+ Math.floor(this.yVelocity),this.xCoordinate + 40,this.yCoordinate + 20);
        // c.fillText("xShift: " + this.xShift ,this.xCoordinate + 40,this.yCoordinate + 40);

        this.c.beginPath()
        this.c.arc(this.xCoordinate, this.yCoordinate, this.radius, 0, 2 * Math.PI, false);
        this.c.fillStyle = fillColor;
        this.c.fill();
        this.c.closePath();
    }
}