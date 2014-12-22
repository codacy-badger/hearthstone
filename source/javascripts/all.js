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

var progress = function () {
  var amtOfCards;
  var $progress;
  var cardsLoaded = 0;

  return {
    init: function () {
      amtOfCards = document.getElementsByClassName('card').length;
      $progress = $('#loading .progress');
    },
    update: function () {
      cardsLoaded += 1;
      var percent = Math.floor(cardsLoaded / amtOfCards * 100);
      $progress.width(percent + '%');
      if (percent === 100) {
        this.hide();
      }
    },
    hide: function () {
      $progress.addClass('not-in-use');
    },
    show: function () {
      $progress.removeClass('not-in-use');
    }
  };
}();

$(document).on('ready', function () {
  progress.init();

  $('#search > input').on('keypress', function (e) {
    if(e.which === 13) {
      search($(this).val());
    }
  });

  $('.card > img').each( function () {
    $this = $(this);
    $this.on('load', function () {
      $(this).parent().addClass('loaded');
      progress.update();
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
