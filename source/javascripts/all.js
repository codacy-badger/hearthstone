//= require_tree .
//= require jquery
//= require typeahead

function myCollection (query, callback) {
  var set = [1, 2, 3, 4, 5, 6];
  callback(set);
}

$(document).on('ready', function () {
  $('#search > input').typeahead({
    minLength: 3
  },{
    name: 'my-collection',
    source: myCollection
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
