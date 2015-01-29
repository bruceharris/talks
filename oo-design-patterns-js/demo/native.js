'use strict';

$(function() {

  // strategies

  function showSlidingLeft() {
    this.$element.addClass('show slide-left');
  }

  function showRollingRight() {
    this.$element.addClass('show roll-right');
  }

  function showExpanding() {
    this.$element.addClass('show expand');
  }

  // context

  // abstract base class Fruit
  function Fruit() {}

  Fruit.prototype.initialize = function() {
    this.$element = $('<img src="images/' + this.name + '.svg" class="fruit ' + this.name + '">');
    $('body').append(this.$element);
  }
  Fruit.prototype.show = function() {
    this.$element.addClass('show');
  }


  // Banana extends Fruit
  function Banana() {
    this.initialize();
  }
  Banana.prototype = Object.create(Fruit.prototype);
  Banana.prototype.name = 'banana';
  Banana.prototype.show = showSlidingLeft;


  // Orange extends Fruit
  function Orange() {
    this.initialize();
  }
  Orange.prototype = Object.create(Fruit.prototype);
  Orange.prototype.name = 'orange';
  Orange.prototype.show = showRollingRight;


  // Apple extends Fruit
  function Apple() {
    this.initialize();
  }
  Apple.prototype = Object.create(Fruit.prototype);
  Apple.prototype.name = 'apple';
  Apple.prototype.show = showExpanding;


  var fruitList = [new Apple(), new Orange(), new Banana()];

  fruitList.forEach(function(fruit) {
    fruit.show();
  });

});
