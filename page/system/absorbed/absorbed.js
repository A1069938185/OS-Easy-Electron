"use strict";
export const absorbed = angular
  .module("absorbed", ["ngRoute"])
  .controller("Absorbed", function ($scope, $http, $timeout) {
    $scope.value = '2'
    $scope.cardList0 = [
      {
        icon: "./images/absorbed.png",
        title: "专注助手",
        introduce: `控制获取或不获取通知的时间`,
        arrow: true,
        config: {
          details: {
            radiobox:{
              value:$scope.value,
              list:[
                {
                  name:"关",
                  introduce:"获取来自应用和联系人的所有通知",
                  value:"1",
                },
                {
                  name:"仅优先通知",
                  introduce:"仅查看优先级列表中的选定通知",
                  method:"自定义优先级列表",
                  value:"2",
                },
                {
                  name:"仅限闹钟",
                  introduce:"隐藏除闹钟外的所有通知",
                  value:"3",
                },
              ]
            },
            optionsbox: {
              checkboxlist: [
                {
                  value: "",
                  name: "显示专注助手时所错过内容的摘要",
                },
              ],
            },
          },
        },
      },
    ];
    $scope.cardList1 = [
      {
        icon:"./images/language.png",
        title: "在这些时间段内",
        introduce: `23:00 - 7:00 仅优先通知`,
        right:true,
        config:{
          switch: {
            value: "",
            label: ["开", "关"],
          },
        }
      },
      {
        icon:"./images/language.png",
        title: "当我投影屏幕时",
        introduce: `仅限闹钟`,
        right:true,
        config:{
          switch: {
            value: "",
            label: ["开", "关"],
          },
        }
      },
      {
        icon:"./images/language.png",
        title: "当我玩游戏时",
        introduce: `仅优先通知`,
        right:true,
        config:{
          switch: {
            value: "",
            label: ["开", "关"],
          },
        }
      },
      {
        icon:"./images/language.png",
        title: "在全屏模式下仅使用应用时",
        introduce: `仅限闹钟`,
        right:true,
        config:{
          switch: {
            value: "",
            label: ["开", "关"],
          },
        }
      },
      {
        icon:"./images/language.png",
        title: "Windows功能更新后的第一小时",
        introduce: `仅优先通知`,
        right:true,
        config:{
          switch: {
            value: "",
            label: ["开", "关"],
          },
        }
      },
    ]
  });
