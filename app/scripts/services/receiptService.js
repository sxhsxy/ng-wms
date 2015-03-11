'use strict';

/**
 * @ngdoc function
 * @name ngWmsApp.service:ReceiptService
 * @description
 * # MainCtrl
 * Controller of the ngWmsApp
 */
angular.module('ngWmsApp')
  .factory('ReceiptService', function ($resource) {
  		return $resource('http://localhost:8080/receipt/:receiptId');
  });
