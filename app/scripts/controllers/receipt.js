'use strict';

/**
 * @ngdoc function
 * @name ngWmsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngWmsApp
 */
angular.module('ngWmsApp')
  .controller('ReceiptCtrl', function ($scope, ReceiptService) {
    $scope.columns = [
      {label: 'ID',    name: 'id'},
      {label: '付款时间', name: 'receiptTime'},
      {label: '销售单',   name: 'sale'}
    ];
    console.log($scope.columns);
    $scope.receiptPage = ReceiptService.query();

  });
