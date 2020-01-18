$(document).ready(function() {
  //collapse navbar when a link is clicked
  var scroll = new SmoothScroll('a[href*="#"]');

  //modal loads the right image
  $(".gallery-image").click(function() {
    $(".modal-body").empty();
    var image = $(this).attr("src");
    var html = '<img src="' + image + '" style="width:100%"/>';
    $(".modal-body").html(html);
    $("#galleryModal").modal({ show: true });
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
});
let pic = "";
for (let i = 0; i < 30; i++) {
  pic += `<img class="gallery-image" src="img/showcase/showcase-img${i}.jpg" data-toggle="modal" data-target="#galleryModal" />`;
}
document.getElementById("images-container").innerHTML = pic;