"use strict";
export const radioComponent = angular.module("radioComponent", []).component("radio", {
  templateUrl: "./page/component/radio/radio.html",
  transclude:false,
  bindings: {
    list:"="
  },
  require: {
    modelValue:"ngModel"
  },
  controller: function Radio($scope) {
    $scope.click=(val)=>{
      this.innerValue = val
      this.modelValue.$setViewValue(val)
    }
    this.$onInit=()=>{
      this.modelValue.$render=()=>{
        this.innerValue = this.modelValue.$modelValue
      }
    }
  },
});
