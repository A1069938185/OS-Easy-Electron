"use strict";
export const notice = angular
  .module("notice", ["ngRoute"])
  .controller("Notice", function ($scope, $http, $timeout) {
    $scope.cardList0 = [
      {
        icon: "./images/notice.png",
        title: "通知",
        introduce: `获取来自应用和其他发送者的通知`,
        arrow: true,
        jump: {},
        config: {
          switch: {
            value: "",
            label: ["开", "关"],
          },
          details: {
            optionsbox: {
              checkboxlist: [
                {
                  value: "",
                  name: "在锁屏界面上显示通知",
                },
                {
                  value: "",
                  name: "在锁屏界面上显示提醒和VoIP来电",
                },
                {
                  value: "",
                  name: "允许通知播放声音",
                },
              ],
            },
          },
        },
      },
      {
        icon: "./images/absorbed.png",
        title: "专注助手",
        introduce: `控制获取或不获取通知的时间`,
        right: true,
        jump: {
        },
      },
    ];
    $scope.cardList1 = [
      {
        icon: "./images/absorbed.png",
        title: "截图工具",
        introduce: `横幅、声音`,
        right: true,
        config: {
          switch: {
            value: "",
            label: ["开", "关"],
          },
        },
      },
      {
        icon: "./images/absorbed.png",
        title: "截图工具",
        introduce: `横幅、声音`,
        right: true,
        config: {
          switch: {
            value: "",
            label: ["开", "关"],
          },
        },
      },
      {
        icon: "./images/absorbed.png",
        title: "截图工具",
        introduce: `横幅、声音`,
        right: true,
        config: {
          switch: {
            value: "",
            label: ["开", "关"],
          },
        },
      },
      {
        icon: "./images/absorbed.png",
        title: "截图工具",
        introduce: `横幅、声音`,
        right: true,
        config: {
          switch: {
            value: "",
            label: ["开", "关"],
          },
        },
      },
      {
        icon: "./images/absorbed.png",
        title: "截图工具",
        introduce: `横幅、声音`,
        right: true,
        config: {
          switch: {
            value: "",
            label: ["开", "关"],
          },
        },
      },
      {
        icon: "./images/absorbed.png",
        title: "截图工具",
        introduce: `横幅、声音`,
        right: true,
        config: {
          switch: {
            value: "",
            label: ["开", "关"],
          },
        },
      },
      {
        icon: "./images/absorbed.png",
        title: "截图工具",
        introduce: `横幅、声音`,
        right: true,
        config: {
          switch: {
            value: "",
            label: ["开", "关"],
          },
        },
      },
      {
        icon: "./images/absorbed.png",
        title: "截图工具",
        introduce: `横幅、声音`,
        right: true,
        config: {
          switch: {
            value: "",
            label: ["开", "关"],
          },
        },
      },
    ];
    $scope.checkboxlist=[
      {
        value:"",
        name:`更新后向我显示"欢迎使用Windows"体验，并在我登陆时突出新增内容和建议的内容`
      }, 
      {
        value:"",
        name:`提供关于如何设置设备的建议`
      }, 
      {
        value:"",
        name:`使用Windows时获取提示和建议`
      }
    ]
  });
