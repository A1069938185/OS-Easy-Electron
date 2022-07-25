"use strict";
export const dateAndTime = angular
  .module("date-and-time", ["ngRoute"])
  .controller("DateAndTime", function ($scope, $rootScope, $http, $interval) {
    $scope.from = {
      autoTime: false,
      switch0: false,
      switch1: false,
      timeZone: "6",
      calendar: "1",
    };
    $scope.updateTime = `上次成功同步时间:2022/7/11 8:19:48`;
    $scope.getNowTime = function () {
      let time = new Date();
      $scope.cardList0[0].label = `${time.getFullYear()}年${
        time.getMonth() + 1
      }月${time.getDate()}日,${time.getHours()}：${time.getMinutes()}`;
    };
    $interval($scope.getNowTime, 1000);
    $scope.getUpdateTime = function () {
      let time = new Date();
      $scope.updateTime = `成功同步时间:${time.getFullYear()}/${
        time.getMonth() + 1
      }/${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    };
    $scope.timeZoneList = [];
    $scope.calendarList = [];
    $http({
      method: "GET",
      url: $rootScope.BASE_URL + "timeZone.json",
    }).then((res) => {
      $scope.timeZoneList = res.data;
    });
    $http({
      method: "GET",
      url: $rootScope.BASE_URL + "calendar.json",
    }).then((res) => {
      $scope.calendarList = res.data;
    });
    $scope.$watch("cardList0[1].config.switch.value", (n, o) => {
      $scope.from.autoTime = n;
      $scope.cardList0[2].disable = !n;
      $scope.cardList0[4].disable = !n;
      $scope.cardList0[5].disable = n;
    });
    $scope.$watch("timeZoneList", (n, o) => {
      $scope.cardList0[3].config.downList.list = n;
    });
    $scope.$watch("calendarList", (n, o) => {
      $scope.cardList1[1].config.downList.list = n;
    });
    $scope.$watch("updateTime", (n, o) => {
      $scope.cardList1[0].introduceList[0] = n;
    });
    $scope.cardList0 = [
      {
        title: "当前日期和时间",
        label: "",
        jump: {},
        config: {},
      },
      {
        title: "自动设置时间",
        jump: {},
        config: {
          switch: {
            value: $scope.from.autoTime,
            label: ["开", "关"],
          },
        },
      },
      {
        title: "自动调节为夏令时",
        disable: !$scope.from.autoTime,
        jump: {},
        config: {
          switch: {
            value: $scope.from.switch0,
            label: ["开", "关"],
          },
        },
      },
      {
        icon: "./images/timeZone.png",
        title: "时区",
        jump: {},
        config: {
          downList: {
            value: $scope.from.timeZone,
            list: $scope.timeZoneList,
            size: "long",
          },
        },
      },
      {
        title: "自动设置时区",
        disable: !$scope.from.autoTime,
        jump: {},
        config: {
          switch: {
            value: $scope.from.switch1,
            label: ["开", "关"],
          },
        },
      },
      {
        title: "手动设置日期和时间",
        disable: $scope.from.autoTime,
        jump: {},
        config: {
          button: {
            size: "default",
            name: "更改",
          },
        },
      },
    ];
    $scope.cardList1 = [
      {
        title: "立即同步",
        introduceList: [$scope.updateTime, "时间服务器:time.windows.com"],
        jump: {},
        config: {
          button: {
            size: "default",
            name: "更改",
            clickFn:$scope.getUpdateTime
          },
        },
      },
      {
        title: "在任务栏中显示其他日历",
        jump: {},
        config: {
          downList: {
            value: $scope.from.calendar,
            list: $scope.calendarList,
            size:"long"
          },
        },
      },
    ];
    $scope.cardList2 = [
      {
        icon:"./images/language.png",
        title: "语言和区域",
        introduce: `语言包，区域格式`,
        right:true,
        jump: {
          crumbs:{
            title:"语言和区域",
            url:"time-and-language/language-and-region"
          },
          z:2
        },
        config: {
        },
      },
      {
        title: "附加时钟",
        introduce: `不同时区的时钟`,
        right:true,
        jump: {
        },
        config: {
        },
      },
    ];

    $scope.getNowTime();
  });
