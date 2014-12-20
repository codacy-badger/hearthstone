//= require_tree .
//= require jquery

$(document).on('ready', function () {
  $('.card > img').each( function () {
    $this = $(this);
    $this.on('load', function () {
      $(this).parent().addClass('loaded');
    });
    var src = $this.data('src');
    $this.attr('src', src);
  });
});
