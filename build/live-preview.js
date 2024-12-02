(function ($) {
  wp.customize("react_max_width", function (value) {
    value.bind(function (newValue) {
      // Update the preview. You can change the body style or any other element
      $("body").css("max-width", newValue + "px");
    });
  });
})(jQuery);
