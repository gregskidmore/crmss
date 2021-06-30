function Scroll(where) {
  $(window).scrollTo($(where), 500, { offset: { top: -20, left: -50 } });
}

function ScrollToTop() {
  $(window).scrollTo($("#nav-main"), 500, { offset: { top: 0, left: -50 } });
}

$(document).ready(function () {
  $("#nav-mobile").html($("#nav-main").html());
  $("#nav-trigger span").click(function () {
    if ($("nav#nav-mobile ul").hasClass("expanded")) {
      $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
      $(this).removeClass("open");
    } else {
      $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
      $(this).addClass("open");
    }
  });
});
