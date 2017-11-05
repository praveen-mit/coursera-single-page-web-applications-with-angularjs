(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'src/data/templates/item_list.template.html',
  bindings: {
    itemList: '<'
  }
});

})();
