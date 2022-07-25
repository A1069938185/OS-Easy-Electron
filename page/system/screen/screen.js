"use strict";
export const screen = angular
  .module("screen", ["ngRoute"])
  .controller("Screen", function ($scope, $rootScope, $http, $timeout) {
    $scope.tag = `亮度:${$rootScope.value}`;
    $scope.$watch("cardList0[1].config.slider.value", (val) => {
      $rootScope.value = val;
      $scope.tag = `亮度:${$rootScope.value}`;
      document.querySelector("html").style.filter = `brightness(${
        $rootScope.value / 200 + 0.5
      })`;
      $scope.cardList0[1].config.slider.tag = $scope.tag;
    });
    $scope.cardList0 = [
      {
        icon: "./images/windosw.png",
        title: "夜间模式",
        introduce: `使用较暖的颜色帮助屏蔽蓝光`,
        right: true,
        jump: {},
        config: {
          switch: {
            value: false,
          },
        },
      },
      {
        icon: "./images/windosw.png",
        title: "屏幕亮度",
        introduce: `调整屏幕亮度`,
        jump: {},
        config: {
          slider: {
            value: $scope.value,
            tag: $scope.tag,
          },
        },
      },
      {
        icon: "./images/windosw.png",
        title: "HDR",
        introduce: `有关HDR的详细信息`,
        right: true,
        jump: {},
        config: {},
      },
    ];
    $scope.cardList1 = [
      {
        icon: "./images/windosw.png",
        title: "缩放",
        introduce: `更改文本、应用和其他项目的大小`,
        right: true,
        jump: {},
        config: {
          downList: {
            value: "4",
            list: [
              { key: "100%", value: "0" },
              { key: "125%", value: "1" },
              { key: "150%", value: "2" },
              { key: "175%", value: "3" },
              { key: "200%(推荐)", value: "4" },
              { key: "225%", value: "5" },
              { key: "250%", value: "6" },
              { key: "275%", value: "7" },
            ],
          },
        },
      },
      {
        icon: "./images/windosw.png",
        title: "显示器分辨率",
        introduce: `调整分辨率以适合所连接的显示器`,
        disable: true,
        jump: {},
        config: {
          downList: {
            value: "0",
            list: [{ key: "2560 x 1600(推荐)", value: "0" }],
            size: "long",
          },
        },
      },
      {
        icon: "./images/windosw.png",
        title: "显示方向",
        jump: {},
        config: {
          downList: {
            value: "0",
            list: [
              { key: "横向", value: "0" },
              { key: "纵向", value: "1" },
              { key: "横向(翻转)", value: "2" },
              { key: "纵向(翻转)", value: "3" },
            ],
          },
        },
      },
      {
        icon: "./images/windosw.png",
        title: "多显示器",
        introduce: `选择显示器的呈现模式`,
        arrow: true,
        jump: {},
        config: {
          details: {
            optionsbox: {
              checkboxlist: [
                {
                  value: "",
                  name: "基于显示器连接记住窗口位置",
                },
                {
                  value: "",
                  name: "在显示器断开连接时最小化窗口",
                },
              ],
              btnlist: [
                {
                  name: "检测其他显示器",
                  button: {
                    name: "检测",
                    size: "default",
                  },
                },
              ],
            },
          },
        },
      },
    ];
    $scope.cardList3 = [
      {
        icon: "./images/windosw.png",
        title: "高级显示器设置",
        introduce: `显示器信息，刷新率`,
        right: true,
        jump: {},
        config: {},
      },
      {
        icon: "./images/windosw.png",
        title: "显示卡",
        right: true,
        jump: {},
        config: {},
      },
    ];
  });
