//= require ./../../source/javascripts/app
//= require ./../../bower_components/angular-mocks/angular-mocks
//= require_tree .

describe('CollectionController', function () {
  beforeEach(module('hearthstone'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$controller.isMinion', function () {
    var $scope, controller;

    beforeEach(function () {
      $scope = {};
      controller = $controller('CollectionController', { $scope: $scope });
    });

    it('returns true if passed a minion', function () {
      var result = controller.isMinion({type: 'Minion'});
      expect(result).toEqual(true);
    });

    it('returns false if passed a spell', function () {
      var result = controller.isMinion({type: 'Spell'});
      expect(result).toEqual(false);
    });
  });
});
