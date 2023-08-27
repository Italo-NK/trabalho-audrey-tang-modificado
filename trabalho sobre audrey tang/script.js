document.addEventListener("DOMContentLoaded", function(event) {
    var colors = ["white","black","gray"];
    var currentIndex = 0;
    var body = document.querySelector("body");
  
    setInterval(function() {
      body.style.backgroundColor = colors[currentIndex];
      currentIndex = (currentIndex + 1) % colors.length;
    }, 750);
  });
  