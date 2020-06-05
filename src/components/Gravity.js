export default {
  mounted() {
    if (window.DeviceMotionEvent) {
      window.addEventListener("devicemotion", this.motionHandler, false);
    } else {
      document.body.innerHTML = "What user agent u r using???";
    }

    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", this.orientationHandler, false);
    } else {
      document.body.innerHTML = "What user agent u r using???";
    }
  },
  orientationHandler(event) {
    document.getElementById("alpha").innerHTML = event.alpha;
    document.getElementById("beta").innerHTML = event.beta;
    document.getElementById("gamma").innerHTML = event.gamma;
    document.getElementById("heading").innerHTML = event.webkitCompassHeading;
    document.getElementById("accuracy").innerHTML = event.webkitCompassAccuracy;

  },
  motionHandler(event) {
    document.getElementById("interval").innerHTML = event.interval;
    var acc = event.acceleration;
    document.getElementById("x").innerHTML = acc.x;
    document.getElementById("y").innerHTML = acc.y;
    document.getElementById("z").innerHTML = acc.z;
    var accGravity = event.accelerationIncludingGravity;
    document.getElementById("xg").innerHTML = accGravity.x;
    document.getElementById("yg").innerHTML = accGravity.y;
    document.getElementById("zg").innerHTML = accGravity.z;
    var rotationRate = event.rotationRate;
    document.getElementById("Ralpha").innerHTML = rotationRate.alpha;
    document.getElementById("Rbeta").innerHTML = rotationRate.beta;
    document.getElementById("Rgamma").innerHTML = rotationRate.gamma;
  }
}