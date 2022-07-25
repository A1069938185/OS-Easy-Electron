"use strict";
export const downListComponent = angular.module("downListComponent", []).component("downList", {
  templateUrl: "./page/component/downList/downList.html",
  bindings: {
    source: "@?",
    list:"<",
    size: "@?",
    key:"@",
    value:"@",
  },
  require: {
    x: "ngModel",
  },
  controller: function Switch($scope,$http) {
    this.$onInit = function () {
      if(this.key==undefined) this.key='key'
      if(this.value==undefined) this.value='value'
      if (this.list==undefined&&this.source) {
        $http({
          method: "GET",
          url: this.source,
        }).then((res) => {
          this.data = res.data;
        });
      }else{
        this.data = this.list
      }
      this.x.$render = function () {
        $scope.selected = this.$modelValue;
      };
    };
    $scope.click=(e)=>{
      e.stopPropagation()
    }
    //当外部的数组改变时，同步内部的数组
    this.$onChanges = function (changeModel) {
      this.data = changeModel.list.currentValue;
    }
    $scope.change = (value) => {
      this.x.$setViewValue(value);
    };
  },
});
