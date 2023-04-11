// Check if there are any elements with the data-to attribute inside an element with the class counter-item
if ($(".counter-item [data-to]").length > 0) {
  // Loop through each element with the data-to attribute
  $(".counter-item [data-to]").each(function() {
    // Get the current element and its offset from the top of the page
    var stat_item = $(this),
      offset = stat_item.offset().top;
    // If the user has already scrolled past the offset and the element doesn't have the class "counting", add the class and animate the count
    if ($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
      stat_item.addClass('counting');
      stat_item.countTo();
    };
    // Add a scroll listener to the window to check if the user has scrolled past the offset and the element doesn't have the class "counting"
    $(window).scroll(function() {
      if ($(window).scrollTop() > (offset - 800) && !(stat_item.hasClass('counting'))) {
        stat_item.addClass('counting');
        stat_item.countTo();
      }
    });
  });
};
