$(function () {
  $("#to-up").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $("#to-up").fadeIn(1000);
    } else {
      $("#to-up").fadeOut();
    }
  });
  $("#to-up").click(function () {
    $("body,html").animate({scrollTop: 0}, 500);
    return false;
  });
});

