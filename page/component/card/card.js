"use strict";
export const cardComponent = angular
  .module("cardComponent", [])
  .component("card", {
    templateUrl: "./page/component/card/card.html",
    transclude: {
      more: "?more",
    },
    bindings: {
      card: "=?",
    },
    require: {},
    controller: function Card($scope) {
      this.$onInit = () => {
        // console.log(this);
        // 对config的选项进行存在性判断，并进行提取
        if (!!this.card.config) {
          if (!!this.card.config.downList) {
            $scope.downList = this.card.config.downList;
          }
          if (!!this.card.config.button) {
            $scope.button = this.card.config.button;
          }
          if (!!this.card.config.btnlist) {
            $scope.btnlist = this.card.config.btnlist;
          }
          if (!!this.card.config.expand) {
            $scope.expand = this.card.config.expand;
          }
          if (!!this.card.config.switch) {
            $scope.switch = this.card.config.switch;
          }
          if (!!this.card.config.slider) {
            $scope.slider = this.card.config.slider;
          }
          if (!!this.card.config.details) {
            $scope.details = this.card.config.details;
          }
        }
        if (!!this.card.arrow) {
          $scope.arrowClass = true;
          $scope.arrowClick = function (e) {
            console.log(e);
            e.stopPropagation()
            $scope.arrowClass = !$scope.arrowClass;
          };
        }
      };
      this.$onChanges = () => {};
    },
  });
