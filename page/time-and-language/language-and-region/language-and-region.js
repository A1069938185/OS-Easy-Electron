"use strict";
export const languageAndRegion=
angular
  .module("language-and-region", ["ngRoute"])
  .controller("LanguageAndRegion", function ($scope, $http,$timeout) {
    $scope.from = {
      autoTime: false,
      switch0: false,
      switch1: false,
      language: "0",
      country: "0",
      region: "0",
    };
    $scope.info = [
      { key: "区域格式", value: ''},
      { key: "日历", value: "公历" },
      { key: "一周的第一天", value: "星期一" },
      { key: "短日期", value: "22/7/11" },
      { key: "长日期", value: "2022年7月11日" },
      { key: "短时间", value: "9:57" },
      { key: "长时间", value: "9:57:29" },
    ];
    $scope.regionChange = function () {
      $scope.info[0].value = $scope.regionList[$scope.from.region].key;
    };
    $scope.countryList = [];
    $scope.languageList = [];
    $scope.regionList = [];
    $scope.languageExpandSwitch = false;
    $scope.arrowClass = true;
    $http({
      method: "GET",
      url: $scope.BASE_URL + "language.json",
    }).then((res) => {
      $scope.languageList = res.data;
      $scope.cardList0[0].config.downList.list = $scope.languageList
    });
    $http({
      method: "GET",
      url: $scope.BASE_URL + "country.json",
    }).then((res) => {
      $scope.countryList = res.data;
      $scope.cardList1[0].config.downList.list = $scope.countryList

    });
    $http({
      method: "GET",
      url: $scope.BASE_URL + "region.json",
    }).then((res) => {
      $scope.regionList = res.data;
      $scope.cardList1[1].config.downList.list = $scope.regionList
      $scope.info[0].value = $scope.regionList[$scope.from.region].key
    });
    $scope.cardList0 = [
      {
        icon: "./images/windosw.png",
        title: "Windows显示语言",
        introduce: `"设置"和"文件资源管理器"等Windows功能将使用此语言显示。`,
        right: false,
        jump:{
        },
        config: {
          downList:{
            value:$scope.from.language,
            list:$scope.languageList,
            size:"long",
          }
        },
      },
      {
        title: "首选语言",
        introduce: `Microsoft Store应用将以此列表中支持的第一种语言显示`,
        right: false,
        jump:{
        },
        config: {
          button:{
            color:'blue',
            size:'default',
            name:"添加语言"
          }
        },
      },
      {
        icon:"./images/package.png",
        title: "中文(简体,中国)",
        introduce: `语言包，文本到语音转换，语音识别，手写，基本输入法`,
        right: false,
        jump:{
        },
        config: {
          expand:{
            options:[
              {
                icon:"./images/language.png",
                name:"语言选项"
              },
              {
                icon:"./images/top.png",
                name:"上移"
              },
              {
                icon:"./images/down.png",
                name:"下移"
              },
              {
                icon:"./images/trash.png",
                name:"删除"
              },
            ]
          }
        },
      },
    ];
    $scope.cardList1 = [
      {
        icon:"./images/globe.png",
        title: "国家或地区",
        introduce: `Windows和应用可能会根据你所在的国家或地区想你提供本地内容`,
        blank: true,
        jump:{
        },
        config: {
          downList:{
            value:$scope.from.country,
            list:$scope.countryList,
            size:"medium"
          }
        },
      },
      {
        icon:"./images/language.png",
        title: "区域格式",
        introduce: `Windows和某些应用根据区域格式设置日期和时间格式`,
        arrow: true,
        jump:{
        },
        config: {
          downList:{
            value:$scope.from.region,
            list:$scope.regionList,
            size:"long",
            changeFn:function(){
              $scope.info[0].value = this.list[this.value].key
            }
          },
          details:{
            infobox:{
              list:$scope.info
            },
            button:{
              size:"medium",
              name:"更改格式"
            }
          }
        },
      },
    ]
    $scope.cardList2 = [
      {
        icon:"./images/keyboard.png",
        title: "输入",
        introduce: `拼写检查、自动更正、文本建议`,
        right: true,
        jump:{
          crumbs:{
            title:"输入",
            url:"time-and-language/entry"
          },
          z:2
        },
        config: {
        },
      },
      {
        icon:"./images/manage.png",
        title: "管理语言设置",
        right: true,
        jump:{
        },
        config: {
        },
      },
    ]
  });
