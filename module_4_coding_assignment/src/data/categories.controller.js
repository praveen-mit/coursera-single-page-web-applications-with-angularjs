(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['category_list'];
function CategoriesController(category_list) {
  var catgy = this;
  catgy.categories = category_list;
}

})();
