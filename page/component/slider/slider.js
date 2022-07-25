"use strict";
export const sliderComponent = angular
  .module("sliderComponent", [])
  .component("slider", {
    templateUrl: "./page/component/slider/slider.html",
    transclude: false,
    bindings: {
      tag: "=",
      imgs: "=",
      value: "=",
    },
    require: {},
    controller: function Slider($scope) {
      $scope.change = () => {
        if (this.imgs && this.imgs.length == 3) {
          if (this.value == 0) {
            this.img = this.imgs[0];
          } else if (this.value > 0 && this.value <= 50) {
            this.img = this.imgs[1];
          } else if (this.value > 50 && this.value <= 100) {
            this.img = this.imgs[2];
          }
        }
      };
      this.$onInit = ()=>{
        $scope.change()
      }
    },
  });
