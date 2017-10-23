(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

function ShoppingListCheckOffService () {
  var shopping_list_check_off = this;

  var to_buy_items = [
    { name: 'Cookies', quantity: '10' },
    { name: 'Potatoes', quantity: '1 Kg' },
    { name: 'Idly Chilly Powder', quantity: '3 pkts' },
    { name: 'Milk', quantity: '1 litre' },
    { name: 'Eggs', quantity: '12' }
  ];

  var already_bought_items = [];

  shopping_list_check_off.get_to_buy_items = function () {
    return to_buy_items;
  };

  shopping_list_check_off.get_already_bought_items = function () {
    return already_bought_items;
  };

  shopping_list_check_off.buy_item = function (item_index) {
    var bought_item = to_buy_items.splice(item_index, 1)[0];
    already_bought_items.push(bought_item);
  }
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController (ShoppingListCheckOffService) {
  var to_buy = this;

  to_buy.to_buy_items = ShoppingListCheckOffService.get_to_buy_items();

  to_buy.buy_item = function(item_index) {
    ShoppingListCheckOffService.buy_item(item_index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

function AlreadyBoughtController (ShoppingListCheckOffService) {
  var already_bought = this;

  already_bought.already_bought_items = ShoppingListCheckOffService.get_already_bought_items();
}

})();
