$(document).ready(function() {
  $(".burger-nav").on("click", function() {
    if (screen.width < 960) {
      $("nav ul").toggle();
    }
  });

  $("nav ul li a").on("click", function() {
    if (screen.width < 960) {
      $("nav ul").toggle();
    }
  });
});
