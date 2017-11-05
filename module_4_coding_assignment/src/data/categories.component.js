(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/data/templates/category_list.template.html',
  bindings: {
    categoryList: '<'
  }
});

})();
