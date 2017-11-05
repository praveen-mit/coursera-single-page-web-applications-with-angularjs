(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['item_list'];
function ItemsController(item_list) {
  var its = this;
  its.items = item_list;
}

})();
