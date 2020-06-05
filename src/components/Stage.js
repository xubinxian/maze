export default function Stage(canvas, collision, color) {
    this.canvas = canvas;
    this.collision = collision;
    this.context = canvas.getContext('2d');
    this.context.strokeStyle = '#eee000';
    this.context.fillStyle = '#057748';
    // this.context.lineWith = 3;
    this.centerPoint = [this.canvas.width / 2, this.canvas.height / 2];
    this.unitX = this.canvas.width / 9;
    this.unitY = this.canvas.height / 16;
    this.beginPoint = [this.unitX, this.unitY];

    this.clear = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    this.recover = function() {
        this.context.strokeStyle = color;
        this.context.fillStyle = color;
    }

    this.checkCollision = function(unReachable, gravity) {
    },

    this.stage1 = function () {
        this.clear();
        this.context.beginPath();
        this.context.fillRect(2 * this.unitX, this.unitY, 5 * this.unitX, this.unitY);

        this.context.fillRect(this.unitX, this.unitY * 3, this.unitX * 3, this.unitY);
        this.context.fillRect(this.unitX * 5, this.unitY * 3, this.unitX * 3, this.unitY);
        
        this.context.fillRect(this.unitX, this.unitY * 5, this.unitX, this.unitY * 2);
        this.context.fillRect(this.unitX * 2, this.unitY * 6, this.unitX, this.unitY);
        this.context.fillRect(this.unitX * 3, this.unitY * 5, this.unitX, this.unitY * 2);

        this.context.fillRect(this.unitX * 5, this.unitY * 5, this.unitX, this.unitY * 2);
        this.context.fillRect(this.unitX * 6, this.unitY * 6, this.unitX, this.unitY);
        this.context.fillRect(this.unitX * 7, this.unitY * 5, this.unitX, this.unitY * 2);

        this.context.arc(this.unitX * 4.5, this.unitY * 12, this.unitX * 2, 0, Math.PI);
        
        this.context.moveTo(this.unitX * 4.5, this.unitY * 8);
        this.context.lineTo(this.unitX * 6, this.unitY * 10);
        this.context.lineTo(this.unitX * 3, this.unitY * 10);
        
        
        this.context.closePath();
        this.context.stroke();
        this.context.fill();

        this.recover();
    }
}