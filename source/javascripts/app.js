//= require angular
//= require angular-sanitize

(function () {
  var app = angular.module('hearthstone', ['ngSanitize']);

  app.controller('CollectionController', ['$http', function($http) {
    var collection = this;
    collection.count = 0;
    collection.cards = [];

    // retrieve card data
    $http.get('/collection.json').success(function (data) {

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

  app.filter('removeSpellDamage', function () {
    return function (input) {
      input = input || '';
      return input.replace(/[\$#]/g, '');
    };
  });
})();
