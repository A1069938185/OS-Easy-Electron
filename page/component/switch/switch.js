"use strict";
export const switchComponent = angular.module("switchComponent",[])
.component("switch", {
  templateUrl: "./page/component/switch/switch.html",
  transclude: true,
  bindings:{
    label:"<"
  },
  require: {
    x: 'ngModel'
  },
  controller: function Switch($scope) {
    this.$onInit = function () {
      this.x.$render = function () {
        $scope.switch = this.$modelValue
      }
    }
    $scope.send2parent = (value)=>{
      this.x.$setViewValue(value)
    }
  },
});