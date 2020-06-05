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
      this.canvas.style.backgroundColor = "#223";

      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    },

    initOrb() {
      var fillColors = ["#2A3B30", "#ABFFD1", "#EBFFF5", "#9DFEFF", "#273B40"];

      for (var i = 0; i < 1; i++) {
        this.orbs.push(
          new Orb(
            this.canvas.width / 3,
            '#d9b611',
            this.canvas
          )
        );
      }
      this.animate();
    },

    initEventListener() {

      if (window.DeviceMotionEvent) {
        window.addEventListener("devicemotion", this.motionHandler, false);
      } else {
        alert("Oops!! What user agent u r using???");
      }

      if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", this.orientationHandler, false);
      } else {
        alert("Oops!! What user agent u r using???");
      }

      window.addEventListener("resize", e => {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
      });
    },

    orientationHandler(event) {
      this.canvas.orientation = event;
      // document.getElementById("alpha").innerHTML = event.alpha;
      // document.getElementById("beta").innerHTML = event.beta;
      // document.getElementById("gamma").innerHTML = event.gamma;
      // document.getElementById("heading").innerHTML = event.webkitCompassHeading;
      // document.getElementById("accuracy").innerHTML = event.webkitCompassAccuracy;

    },
    motionHandler(event) {
      this.canvas.montion = event;
      // document.getElementById("interval").innerHTML = event.interval;
      // var acc = event.acceleration;
      // document.getElementById("x").innerHTML = acc.x;
      // document.getElementById("y").innerHTML = acc.y;
      // document.getElementById("z").innerHTML = acc.z;
      // var accGravity = event.accelerationIncludingGravity;
      // document.getElementById("xg").innerHTML = accGravity.x;
      // document.getElementById("yg").innerHTML = accGravity.y;
      // document.getElementById("zg").innerHTML = accGravity.z;
      // var rotationRate = event.rotationRate;
      // document.getElementById("Ralpha").innerHTML = rotationRate.alpha;
      // document.getElementById("Rbeta").innerHTML = rotationRate.beta;
      // document.getElementById("Rgamma").innerHTML = rotationRate.gamma;
    },

    initStage() {
      this.stageMG = new Stage(this.canvas, null, '#2A3B30');
    },

    animate() {
      clearTimeout(this.animate);
      setTimeout(this.animate, 250);

      // this.stageMG.stage1();

      this.orbs.forEach(function (orb) {
        orb.update();
      });
    }
  }
};
</script>