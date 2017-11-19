(function () {
"use strict";

angular.module('public')
.service('signupService', signupService);


function signupService() {
  var service = this;

  service.user = {};
  service.user.firstName = "";
  service.user.lastName = "";
  service.user.emailAddress = "";
  service.user.phoneNumber = "";
  service.user.favMenu = "";
  service.favMenu = {};

  service.signupUser = function (user, favMenu) {
    service.user = user;
    service.favMenu = favMenu;
  };

  service.getUser = function () {
    return service;
  };
}

})();
