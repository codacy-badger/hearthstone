//= require_tree .
//= require jquery

function search (query) {
  var set = [];
  var key, cardId;

  // remove special : queries
  var terms = query.split(/\s+/);

  var special = [];
  var normal = [];
  var i;
  for (i = 0; i < terms.length; i++) {
    if (terms[i].indexOf(':') > -1) {
      special.push(terms[i]);
    } else {
      normal.push(terms[i]);
    }
  }

  for (key in CARD_NAMES) {
    cardId = CARD_NAMES[key];
    var found = true;
    i = 0;
    do {
      if (key.toLowerCase().indexOf(normal[i].toLowerCase()) === -1) {
        found = false;
      }
      i += 1;
    } while (found && i < normal.length);

    if (found) {
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
    });
    var src = $this.data('src');
    $this.attr('src', src);
  });
});
