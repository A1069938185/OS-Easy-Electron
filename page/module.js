"use strict";
import { system } from "./system/system.js";
import { view2 } from "./view2/view2.js";
import { view3 } from "./view3/view3.js";
import { view4 } from "./view4/view4.js";
import { view5 } from "./view5/view5.js";
import { view6 } from "./view6/view6.js";
import { timeAndLanguage } from "./time-and-language/time-and-language.js";
import { view8 } from "./view8/view8.js";
import { view9 } from "./view9/view9.js";
import { view10 } from "./view10/view10.js";
import { windowsUpdate } from "./windows-update/windows-update.js";
import { component } from "./component/component.js";
//路由
import { timeAndLanguageRoute } from "./time-and-language/route.js";
import { windowsUpdateRoute } from "./windows-update/route.js";
import { systemRoute } from "./system/route.js";

const route = [
  systemRoute,
  {
    routeName: "蓝牙和其他设备",
    routeUrl: "/view2",
    templateUrl: "./page/view2/view2.html",
    controller: "View2Ctrl",
    children: [],
  },
  {
    routeName: "网络及Internet",
    routeUrl: "/view3",
    templateUrl: "./page/view3/view3.html",
    controller: "View3Ctrl",
    children: [],
  },
  {
    routeName: "个性化",
    routeUrl: "/view4",
    templateUrl: "./page/view4/view4.html",
    controller: "View4Ctrl",
    children: [],
  },
  {
    routeName: "应用",
    routeUrl: "/view5",
    templateUrl: "./page/view5/view5.html",
    controller: "View5Ctrl",
    children: [],
  },
  {
    routeName: "账户",
    routeUrl: "/view6",
    templateUrl: "./page/view6/view6.html",
    controller: "View6Ctrl",
    children: [],
  },
  timeAndLanguageRoute,
  {
    routeName: "游戏",
    routeUrl: "/view8",
    templateUrl: "./page/view8/view8.html",
    controller: "View8Ctrl",
    children: [],
  },
  {
    routeName: "辅助功能",
    routeUrl: "/view9",
    templateUrl: "./page/view9/view9.html",
    controller: "View9Ctrl",
    children: [],
  },
  {
    routeName: "隐私和安全性",
    routeUrl: "/view10",
    templateUrl: "./page/view10/view10.html",
    controller: "View10Ctrl",
    children: [],
  },
  windowsUpdateRoute,
];
// console.log(route);
export const myView = angular
  .module("myView", [
    "ngRoute",
    "myView.system",
    "myView.view2",
    "myView.view3",
    "myView.view4",
    "myView.view5",
    "myView.view6",
    "myView.timeAndLanguage",
    "myView.view8",
    "myView.view9",
    "myView.view10",
    "myView.windowsUpdate",
    "component",
  ])
  .config([
    "$routeProvider",
    function ($routeProvider) {
      function constructRoute(routeTree, joinUrl) {
        //递归遍历路由树
        angular.forEach(routeTree, (item) => {
          //拼接父路由的路径
          let join = joinUrl || "";
          //判断是否进行递归
          if (item.children instanceof Array && item.children.length > 0) {
            constructRoute(item.children, join + item.routeUrl);
          }
          //生成路由
          $routeProvider.when(join + item.routeUrl, {
            templateUrl: item.templateUrl,
            controller: item.controller,
            routeName: item.routeName,
          });
        });
      }
      constructRoute(route);
    },
  ])
  .controller("myView", function ($scope, $rootScope, $route) {});
