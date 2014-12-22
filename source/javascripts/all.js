//= require_tree .
//= require jquery

function search (query) {
  var set = [];
  var key, cardId;
  for (key in CARD_NAMES) {
    cardId = CARD_NAMES[key];
    if (key.toLowerCase().indexOf(query.toLowerCase()) > -1) {
      $('.' + cardId).show();
    } else {
      $('.' + cardId).hide();
    }
  }
}

$(document).on('ready', function () {
  $('#search > input').on('keypress', function (e) {
    if(e.which === 13) {
      search($(this).val());
    }
  });

  $('.card > img').each( function () {
    $this = $(this);
    $this.on('load', function () {
      $(this).parent().addClass('loaded');
    }).on('click', function () {
      var img = '<img src="' + $(this).data('src') + '" />';
      $('#lightbox').addClass('loaded').html(img).show();
    });
    var src = $this.data('src');
    $this.attr('src', src);
  });

  $('#lightbox').on('click', function () {
    $(this).removeClass('loaded').hide();
  });
});
