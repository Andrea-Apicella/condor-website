$(document).ready(function() {

//modal loads the right image
$(".gallery-image").click(function() {
  $('.modal-body').empty();
  var image = $(this).attr("src");
  var html ='<img src="'+image+'" style="width:100%"/>';
  $('.modal-body').html(html);
  $('#galleryModal').modal({show:true});
});
//collapse navbar after a link is clicked
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

//collapse navbar when a link is clicked
var scroll = new SmoothScroll('a[href*="#"]');

});

