(function ($) {
  "use strict";

  const SECTION_IDS = [1, 2, 3, 4, 6];
  const $navLinks = $(".navbar-nav .nav-item .nav-link");
  const $scrollLinks = $(".click-scroll");
  const OFFSET_ADJUSTMENT = 154;

  // Update active nav link on scroll
  $(document).on("scroll", function () {
    const currentScroll = $(document).scrollTop() + 1;

    SECTION_IDS.forEach(function (sectionId, index) {
      const $section = $("#section_" + sectionId);
      if (!$section.length) return;

      const sectionOffset = $section.offset().top - OFFSET_ADJUSTMENT;

      if (currentScroll >= sectionOffset) {
        $navLinks.removeClass("active").addClass("inactive");
        $navLinks.eq(index).addClass("active").removeClass("inactive");
      }
    });
  });

  // Smooth scroll for nav items
  $scrollLinks.each(function (index) {
    $(this).on("click", function (e) {
      e.preventDefault();
      const sectionId = SECTION_IDS[index];
      const $target = $("#section_" + sectionId);
      if (!$target.length) return;

      const targetOffset = $target.offset().top - OFFSET_ADJUSTMENT;
      $("html, body").animate({ scrollTop: targetOffset }, 300);
    });
  });

  // Initialize nav state on page load
  $(function () {
    $navLinks.addClass("inactive");
    $navLinks.eq(0).addClass("active").removeClass("inactive");
  });
})(jQuery);
