'use strict';

$(function() {

  // strategy "classes"

  // Base class with default strategy implementation
  function ShowBehavior() {}
  ShowBehavior.prototype.show = function($element) {
    $element.addClass('show');
  }

  // SlidingLeftBehavior extends ShowBehavior
  function SlidingLeftBehavior() {}
  SlidingLeftBehavior.prototype = Object.create(ShowBehavior.prototype);
  SlidingLeftBehavior.prototype.show = function($element) {
    $element.addClass('show slide-left');
  };

  // RollingRightBehavior extends ShowBehavior
  function RollingRightBehavior() {}
  RollingRightBehavior.prototype = Object.create(ShowBehavior.prototype);
  RollingRightBehavior.prototype.show = function($element) {
    $element.addClass('show roll-right');
  };

  // context

  // abstract base class Fruit
  function Fruit() {}

  Fruit.prototype.initialize = function(shower) {
    if (shower) this.shower = shower;
    this.$element = $('<img src="images/' + this.name + '.svg" class="fruit ' + this.name + '">');
    $('body').append(this.$element);
  }
  Fruit.prototype.show = function() {
    this.shower.show(this.$element);
  }
  Fruit.prototype.shower = new ShowBehavior();


  // Banana extends Fruit
  function Banana(shower) {
    this.initialize(shower);
  }
  Banana.prototype = Object.create(Fruit.prototype);
  Banana.prototype.name = 'banana';


  // Orange extends Fruit
  function Orange(shower) {
    this.initialize(shower);
  }
  Orange.prototype = Object.create(Fruit.prototype);
  Orange.prototype.name = 'orange';

  // Apple extends Fruit
  function Apple(shower) {
    this.initialize(shower);
  }
  Apple.prototype = Object.create(Fruit.prototype);
  Apple.prototype.name = 'apple';

  var fruitList = [
    new Apple(),
    new Orange(new RollingRightBehavior()),
    new Banana(new SlidingLeftBehavior())
  ];

  fruitList.forEach(function(fruit) {
    fruit.show();
  });

});
