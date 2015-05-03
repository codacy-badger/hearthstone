//= require angular
//= require angular-sanitize

(function () {
  var app = angular.module('hearthstone', ['ngSanitize']);

  app.controller('CollectionController', ['$http', function($http) {
    var collection = this;
    collection.count = 0;
    collection.cards = [];

    // retrieve card data
    $http.get('collection.json').success(function (data) {

      // build out cards
      angular.forEach(data, function (value, key) {
        var card = value;
        card.name = key;

        collection.count += card.amount[0] + card.amount[1];

        collection.cards.push(card);
      });
    });

    this.isMinion = function (card) {
      return card.type === 'Minion';
    };

    this.isLoaded = function (card) {
      return;
    };
  }]);

  app.directive('imageonload', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('load', function() {
          element.addClass('loaded');
        });
      }
    };
  });

  app.filter('searchBy', function () {
    return function (card, searchTerm) {
      var matchesName = card.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      var matchesRarity = card.rarity.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;

      var matchesKind = false;
      if (card.race !== null) {
        matchesKind = card.race.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      }

      return matchesName || matchesKind || matchesRarity;
    };
  });

  app.filter('removeSpellDamage', function () {
    return function (input) {
      input = input || '';
      return input.replace(/[\$#]/g, '');
    };
  });
})();