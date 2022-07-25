"use strict";
export const voice = angular
  .module("voice", ["ngRoute"])
  .controller("Voice", function ($scope, $http, $timeout) {
    $scope.cardList0 = [
      {
        icon: "./images/voice.png",
        title: "选择播放声音的位置",
        introduce: `应用可能有自己的设置`,
        arrow: true,
        label: "扬声器",
        jump: {},
        config: {
          details: {
            optionsbox: {
              cardlist: [
                {
                  title: "扬声器",
                  introduce: `Realtek High Definition Audio(SST)`,
                  right: true,
                },
              ],
              btnlist: [
                {
                  name: "配对新的输出设备",
                  button: {
                    name: "添加设备",
                    size: "default",
                    color: "",
                  },
                },
              ],
            },
          },
        },
      },
      {
        title: "音量",
        jump: {},
        config: {
          slider: {
            value: 100,
            imgs: [
              "./images/novoice.png",
              "./images/lowvoice.png",
              "./images/voice.png",
            ],
          },
        },
      },
      {
        title: "单声道音频",
        introduce: `将左声道和右声道合并成一个声道`,
        jump: {},
        config: {
          switch: {
            value: "",
            label: ["开", "关"],
          },
        },
      },
    ];
    $scope.cardList1 = [
      {
        icon: "./images/microphone.png",
        title: "选择用于讲话或录制的设备",
        introduce: `应用可能有自己的设置`,
        arrow: true,
        label: "麦克风阵列",
        jump: {},
        config: {
          details: {
            optionsbox: {
              cardlist: [
                {
                  title: "麦克风阵列",
                  introduce: `Realtek High Definition Audio(SST)`,
                  right: true,
                },
              ],
              btnlist: [
                {
                  name: "配对新的输出设备",
                  button: {
                    name: "添加设备",
                    size: "default",
                    color: "",
                  },
                },
              ],
            },
          },
        },
      },
      {
        title: "音量",
        jump: {},
        config: {
          slider: {
            value: 100,
            imgs: [
              "./images/microphone.png",
              "./images/microphone.png",
              "./images/microphone.png",
            ],
          },
        },
      },
    ];
    $scope.cardList2 = [
      {
        title: "排查常见声音问题",
        config: {
          btnlist: [
            {
              color: "natural",
              size: "default",
              name: "输出设备",
            },
            {
              color: "natural",
              size: "default",
              name: "输入设备",
            },
          ],
        },
      },
      {
        icon: "./images/voice.png",
        title: "所有声音设备",
        introduce: `开启/关闭设备、排除故障、其他选项`,
        right:true,
      },
      {
        icon: "./images/voice.png",
        title: "音量合成器",
        introduce: `应用程序音量混合、应用程序输入和输出设备`,
        right:true,
      },
      {
        title: "更多声音设置",
        right:true,
      },
    ];
  });
