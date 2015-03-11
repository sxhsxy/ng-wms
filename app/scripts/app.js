'use strict';

/**
 * @ngdoc overview
 * @name ngWmsApp
 * @description
 * # ngWmsApp
 *
 * Main module of the application.
 */
angular
  .module('ngWmsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/receipt', {
        templateUrl: 'views/receipt.html',
        controller: 'ReceiptCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
