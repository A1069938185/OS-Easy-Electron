"use strict";
import { dateAndTime } from "./date-and-time/date-and-time.js";
import { entry } from "./entry/entry.js";
import { languageAndRegion } from "./language-and-region/language-and-region.js";
import { entryOpinion } from "./entry/entry-opinion/entry-opinion.js";
export const timeAndLanguage = angular
  .module("myView.timeAndLanguage", [
    "ngRoute",
    "date-and-time",
    "language-and-region",
    "entry",
    "entry-opinion",
  ])
  .controller("TimeAndLanguage", function ($scope) {
    $scope.cardList = [
      {
        icon: "./images/time.png",
        title: "日期和时间",
        introduce: "时区、自动时间设置、日历显示",
        right: true,
        jump:{
          crumbs:{
            title:'日期和时间',url:'time-and-language/date-and-time'
          },
          z:2
        },
        config: {
        },
      },
      {
        icon: "./images/language.png",
        title: "语言和区域",
        introduce: "根据你所在的区域设置Windows和某些应用的日期和时间格式",
        right: true,
        jump:{
          crumbs:{
            title:'语言和区域',url:'time-and-language/language-and-region'
          },
          z:2
        },
        config: {
        },
      },
      {
        icon: "./images/keyboard.png",
        title: "输入",
        introduce: "触摸键盘、文本建议、首选项",
        right: true,
        jump:{
          crumbs:{
            title:'输入',url:'time-and-language/entry'
          },
          z:2
        },
        config: {
        },
      },
      {
        icon: "./images/microphone.png",
        title: "语音",
        introduce: "语音语言、语音识别麦克风设置、声音",
        right: true,
        config: {
        },
      },
    ];
  });
