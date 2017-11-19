(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['signupService', 'MenuService'];
function SignupController(signupService, MenuService) {
  var $signupCtrl = this;
  $signupCtrl.user = {};
  $signupCtrl.user.firstName = "";
  $signupCtrl.user.lastName = "";
  $signupCtrl.user.emailAddress = "";
  $signupCtrl.user.phoneNumber = "";
  $signupCtrl.user.favMenu = "";
  $signupCtrl.signedUp = false;
  $signupCtrl.favMenuValidated = true;

  $signupCtrl.formSubmit = function () {
    var promise = MenuService.getMenuItem($signupCtrl.user.favMenu);

    promise.then(function (response) {
      if (response.id) {
        signupService.signupUser($signupCtrl.user, response);
        $signupCtrl.signedUp = true;
        $signupCtrl.favMenuValidated = true;
      }
      else {
        $signupCtrl.favMenuValidated = false;
      }
    });
  }
}

})();
