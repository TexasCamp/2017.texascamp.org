$(document).ready(function() {

  var $window = $(window);
  var $background = $('.js-background');

  function checkWidth() {
    var window_width = $window.width();
    var site_width = $('.container').width();
    var padding_width = (window_width - site_width) / 2;
    var communication_width = $('.communication').width();
    var background_width = communication_width + padding_width + 'px';

    // Adjust the width of the .background element when the window is resized
    $background.css('width', background_width);
  }

  // Execute on page load
  checkWidth();

  // Bind event listener
  $(window).resize(checkWidth);

});
