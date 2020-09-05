$(document).ready(function() {
  var img = $("#project-image img");
  var spinner = $("#spinner");
  var images = $("#project-thumbs a").map(function(link) {
    return $(this).attr('href');
  }).toArray()
  var imageCount = images.length

  function switchImage(href) {
    spinner.show();
    img.attr("src", href);
    img.on("load", function() {
      spinner.hide();
    });
  }

  function shiftImage(shiftBy) {
    var current = images.indexOf(img.attr("src"));
    var newIndex = (imageCount + current + shiftBy) % imageCount;
    switchImage(images[newIndex]);
  }

  $("#project-thumbs a").on("click", function(e) {
    e.preventDefault();
    switchImage($(this).attr("href"));
  });

  $("#show-prev").on("click", function(e) {
    e.preventDefault();
    shiftImage(-1);
  })

  $("#show-next").on("click", function(e) {
    e.preventDefault();
    shiftImage(+1);
  })
});
