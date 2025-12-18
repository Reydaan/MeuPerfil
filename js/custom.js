(function ($) {
  "use strict";

  // Hide mobile navbar when a link is clicked
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Initialize hero slides
  $(function () {
    $(".hero-slides").vegas({
      slides: [{ src: "images/eu3.png" }],
      timer: false,
      animation: "kenburns",
    });
  });

  // Smooth scroll helper function
  function scrollToElement(element, offsetHeight) {
    const offsetTop = element.offset().top;
    const totalScroll = offsetTop - offsetHeight;
    $("html, body").animate({ scrollTop: totalScroll }, 300);
  }

  // Attach smooth scroll behavior to links
  $(".smoothscroll").on("click", function (e) {
    e.preventDefault();
    const targetSelector = $(this).attr("href");
    const targetElement = $(targetSelector);
    const navbarHeight = $(".navbar").height() + 60;
    scrollToElement(targetElement, navbarHeight);
  });
})(window.jQuery);
