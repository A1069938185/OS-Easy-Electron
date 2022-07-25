"use strict";
export const buttonComponent = angular.module("buttonComponent", []).component("btn", {
  templateUrl: "./page/component/button/button.html",
  transclude:false,
  bindings: {
    color:"@",
    size:"@",
    name:"@",
  },
  require: {
  },
  controller: function Button($scope) {
      this.$onInit = ()=>{
      if(this.size==undefined||this.size=='') this.size='default'
      if(this.color==undefined||this.color=='') this.color='natural'
    }
  },
});
