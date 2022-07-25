"use strict";
export const power = angular
  .module("power", ["ngRoute"])
  .controller("Power", function ($scope, $http, $timeout) {
    $scope.power = 50;
    $scope.value = (48 * $scope.power) / 100 + "%";
    $scope.cardList0 = [
      {
        icon: "./images/power.png",
        title: "电量",
        introduce: `手动调整电量`,
        config: {
          slider: {
            value: $scope.power,
            tag: "电量",
          },
        },
      },
    ];
    $scope.$watch("cardList0[0].config.slider.value", (val) => {
      $scope.power = val;
      $scope.value = (48 * $scope.power) / 100 + "%";
      $scope.$evel   
    });
  });
