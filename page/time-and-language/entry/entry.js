"use strict";
export const entry = angular
  .module("entry", ["ngRoute"])
  .controller("Entry", function ($scope, $http) {
    $scope.from = {
      switch0: false,
      switch1: false,
      language: "",
      country: "",
      region: "",
    };
    $scope.arrowClass = true;
    $scope.languageList = [];
    $scope.getLanguage = function () {
      if (this.languageList.length >= 1) return;
      $http({
        method: "GET",
        url: this.BASE_URL + "language.json",
      }).then((res) => {
        this.languageList = res.data;
      });
    };
    $scope.cardList0 = [
      {
        icon: "./images/keyboard.png",
        title: "触摸键盘",
        arrow: true,
        config: {
          details: {
            optionsbox: {
              checkboxlist: [
                {
                  value: "",
                  name: "在我输入内容时播放按键声音",
                },
                {
                  value: "",
                  name: "每句话的首字母大写",
                },
                {
                  value: "",
                  name: "显示语音输入麦克风按钮",
                },
                {
                  value: "",
                  name: "未连接键盘时显示触摸键盘",
                },
              ],
            },
          },
        },
      },
      {
        icon: "./images/keyboard.png",
        title: "在物理键盘上键入时显示文本建议",
        introduce: "在某些语言中无法使用",
        config: {
          switch: {
            value: $scope.from.switch0,
          },
        },
      },
      {
        icon: "./images/language.png",
        title: "多语言文本建议",
        introduce: "根据我的语言首选项显示文本建议",
        config: {
          switch: {
            value: $scope.from.switch1,
          },
        },
      },
      {
        icon: "./images/history.png",
        title: "键入见解",
        introduce: "查看键入和更正历史记录",
        rigth: true,
        jump: {
          crumbs: {
            title: "键入见解",
            url: "time-and-language/entry/entry-opinion",
          },
          z: 3,
        },
        config: {},
      },
      {
        icon: "./images/gear.png",
        title: "高级键盘设置",
        rigth: true,
        jump: {},
        config: {},
      },
    ];
    $scope.cardList1 = [
      {
        icon: "./images/language.png",
        title: "语言和区域",
        introduce: "语言包，区域格式",
        rigth: true,
        jump: {
          crumbs: {
            title: "语言和区域",
            url: "time-and-language/language-and-region",
          },
          z: 2,
        },
        config: {},
      },
      {
        icon: "./images/book.png",
        title: "墨迹书写和键入个性化",
        introduce: "个人字典",
        rigth: true,
        jump: {
        },
        config: {},
      },
      {
        icon: "./images/letter.png",
        title: "文本光标",
        introduce: "颜色、大小、粗细",
        rigth: true,
        jump: {
        },
        config: {},
      },
    ]
  });
