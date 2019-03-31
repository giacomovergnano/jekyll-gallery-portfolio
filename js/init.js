function pageLoaded() {
  document.querySelector("main").style.opacity = 1;
  $(".loader-box").fadeOut();
  AOS.init({
    once: true,
    duration: 800
  });
}
window.onload = pageLoaded;


$(function() {
  var rad = $(window).width() / 12;
  "use strict"; 
  var canvas = new ge1doot.Canvas();
  var ctx = canvas.ctx;
  var pointer = canvas.pointer
  var blobs = [],
      Ni = 98;
  for (var i = 0; i < Ni; i++) {
      blobs.push(
          new Blob(
              rad * Math.cos((2 * Math.PI) / Ni * i),
              rad * Math.sin((2 * Math.PI) / Ni * i)
          )
      );
  }

  function Blob(x, y) {
      this.blob = document.createElement('canvas');
      this.blob.width = this.blob.height = rad * 2;
      var ict = this.blob.getContext('2d');
      ict.fillStyle = "#ff0";
      ict.arc(rad, rad, rad, 0, 2 * Math.PI);
      ict.fill();
      this.x = x;
      this.y = y;
      this.x0 = x;
      this.y0 = y;
      this.r = rad * rad * 1.4;
  }
  Blob.prototype.anim = function() {
      var dx = pointer.x - this.x - canvas.width * 0.5;
      var dy = pointer.y - this.y - canvas.height * 0.5;
      var d = Math.sqrt(dx * dx + dy * dy);
      this.x = this.x - this.r / d * (dx / d) + (this.x0 - this.x) * 0.5;
      this.y = this.y - this.r / d * (dy / d) + (this.y0 - this.y) * 0.5;
      ctx.drawImage(
          this.blob,
          canvas.width * 0.5 + this.x - rad,
          canvas.height * 0.5 + this.y - rad
      );
  }

  function loop(el) {
      el.anim();
  }

  function run() {
      requestAnimationFrame(run);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blobs.forEach(loop);
  }
  pointer.y = 10000;
  run();
});


$("#light-switcher").click(function(){
  $("body").removeClass("dark").addClass("light");
  $("button.light").addClass("active");
  $("button.dark").removeClass("active");
});

$("#dark-switcher").click(function(){
  $("body").removeClass("light").addClass("dark");
  $("button.dark").addClass("active");
  $("button.light").removeClass("active");
});