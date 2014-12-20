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
    });
    var src = $this.data('src');
    $this.attr('src', src);
  });
});
