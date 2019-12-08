//collapse navbar when a link is clicked
var scroll = new SmoothScroll('a[href*="#"]');

$(".navbar-collapse a").click(function() {
  $(".navbar-collapse").collapse("hide");
});

//add active class on click
$(document).on("click", "nav a", function() {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
});
