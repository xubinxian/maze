<template>
  <div>
    <canvas></canvas>
  </div>
</template>

<script>
import Orb from "./Orb";
import Stage from "./Stage";

export default {
  name: "Main",
  data() {
    return {
      canvas: null,
      context: null,
      orbs: [],
      stageMG: null
    };
  },
  mounted() {
    this.init();
    this.initEventListener();
    this.initStage();
    this.initOrb();
  },
  methods: {
    init() {
      this.canvas = document.querySelector("canvas");
      this.context = this.canvas.getContext("2d");
      this.canvas.style.backgroundColor = "#3d3b4f";
      this.canvas.pullTowardsMouse = false;

      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    },

    initOrb() {
      var fillColors = ["#2A3B30", "#ABFFD1", "#EBFFF5", "#9DFEFF", "#273B40"];

      for (var i = 0; i < 1; i++) {
        this.orbs.push(
          new Orb(
            this.canvas.width / 36,
            fillColors[Math.floor(Math.random() * 5)],
            this.canvas
          )
        );
      }
      this.animate();
    },

    initEventListener() {
      var mouseX = this.canvas.width / 2;
      var mouseY = this.canvas.height / 2;

      window.addEventListener("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      window.addEventListener("mousedown", e => {
        this.canvas.pullTowardsMouse = true;
      });

      window.addEventListener("mouseup", e => {
        this.canvas.pullTowardsMouse = false;

        this.orbs.forEach(function(orb) {
          var xPositiveOrNegative = Math.random() < 0.5 ? -1 : 1;
          var yPositiveOrNegative = Math.random() < 0.5 ? -1 : 1;
          orb.xVelocity = xPositiveOrNegative * orb.xVelocity;
          orb.yVelocity = yPositiveOrNegative * orb.yVelocity;
        });
      });

      window.addEventListener("resize", e => {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      });
    },

    initStage() {
      this.stageMG = new Stage(this.canvas);
      this.stageMG.stage1();
    },

    animate() {
      clearTimeout(this.animate);
      setTimeout(this.animate, 10);

      // this.context.fillStyle = "#3c4a61";
      // this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.stageMG.stage1();

      this.orbs.forEach(function(orb) {
        orb.update();
      });
    }
  }
};
</script>