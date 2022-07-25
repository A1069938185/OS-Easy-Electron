"use strict";
export const expandComponent = angular
  .module("expandComponent", [])
  .component("expand", {
    templateUrl: "./page/component/expand/expand.html",
    transclude: false,
    bindings: {
      options:"<"
    },
    require: {},
    controller: function Expand($scope) {},
  });
