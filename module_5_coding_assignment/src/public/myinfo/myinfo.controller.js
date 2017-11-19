(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['signupService'];
function MyinfoController(signupService) {
  var $myinfoCtrl = this;
  $myinfoCtrl.user = signupService.getUser().user;
  $myinfoCtrl.favMenu = signupService.getUser().favMenu;
  $myinfoCtrl.signedUp = false;
  if ($myinfoCtrl.user.firstName.length > 0) {
    $myinfoCtrl.signedUp = true;
  }
  else {
    $myinfoCtrl.signedUp = false;
  }
}

})();
