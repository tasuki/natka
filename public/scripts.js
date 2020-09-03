$(document).ready(function() {
  img = $("#project-image img");
  spinner = $("#spinner");
  $("#project-thumbs a").on("click", function(e) {
    e.preventDefault();
    href = $(this).attr("href");
    spinner.show();
    img.attr("src", href);
    img.on("load", function() {
      spinner.hide();
    });
  });
});
