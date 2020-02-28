$(document).ready(function() {
  $("#project-thumbs a").on("click", function(e) {
    e.preventDefault();
    x = $(this).attr("href");
    $("#project-image img").attr("src", x);
  });
});
