"use strict";
export const windowsUpdate = angular
  .module("myView.windowsUpdate", ["ngRoute"])
  .controller("WindowsUpdate", function ($scope) {
    $scope.stopUpdateTime = "1";
    $scope.checkTime = "上次检查时间: 昨天 ,19:41";
    $scope.optionsList = [
      { key: "暂停一周", value: "0" },
      { key: "暂停24小时", value: "1" },
      { key: "暂停1小时", value: "2" },
      { key: "暂停30分钟", value: "3" },
    ];
    $scope.changeTime = function () {
      let nowDate = new Date();
      $scope.checkTime = `上次检查时间: 今天 ,${nowDate.getHours()}:${
        (nowDate.getMinutes() + "").length == 1
          ? "0" + nowDate.getMinutes()
          : nowDate.getMinutes()
      }`;
    };
    $scope.cardList = [
      {
        icon: "./images/suspend.png",
        title: "暂停更新",
        introduce: "",
        right: false,
        config: {
          downList: { value: $scope.stopUpdateTime, list: $scope.optionsList },
        },
      },
      {
        icon: "./images/history.png",
        title: "历史记录",
        introduce: "",
        right: true,
        config: {
        },
      },
      {
        icon: "./images/options.png",
        title: "高级选项",
        introduce: "传递优化、可选更新、活跃时间以及其他更新设置",
        right: true,
        config: {
        },
      },
      {
        icon: "./images/cat.png",
        title: "Windows预览体验计划",
        introduce: "获取Windows的预览版本，以分享有关新功能和更新的反馈",
        right: true,
        config: {
        },
      },
    ];
  });
