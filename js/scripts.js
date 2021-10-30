function Scroll(where) {
  $(window).scrollTo($(where), 500, { offset: { top: -20, left: -50 } });
}

function ScrollToTop() {
  $(window).scrollTo($("#nav-main"), 500, { offset: { top: 0, left: -50 } });
}

$(document).ready(function () {
  $("#nav-mobile").html($("#nav-main").html());
  $("#nav-trigger #hamburger").click(function () {
    if ($("nav#nav-mobile ul").hasClass("expanded")) {
      $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
      $("#content").removeClass("open");
      $(this).removeClass("open");
    } else {
      $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
      $("#content").addClass("open");
      $(this).addClass("open");
    }
  });
  if (location.hash) {
    Scroll(location.hash);
  }
});

function openHamburger(x) {
  x.classList.toggle("change");
}
