'use strict';
import { screen } from "./screen/screen.js";
import { voice } from "./voice/voice.js";
import { notice } from "./notice/notice.js";
import { absorbed } from "./absorbed/absorbed.js";
import { power } from "./power/power.js";
export const system = 
angular.module('myView.system', ['ngRoute','screen','voice',"notice","absorbed","power"])
.controller('System', function($scope) {
    $scope.cardList=[
        {
            icon:"./images/screen.png",
            title: "屏幕",
            introduce: `显示器、亮度、夜间模式、显示器配置文件`,
            right: true,
            jump:{
              crumbs:{
                title:"屏幕",
                url:"system/screen"
              },
              z:2
            },
        },
        {
            icon:"./images/voice.png",
            title: "声音",
            introduce: `音量级别、输出、输入、声音设备`,
            right: true,
            jump:{
              crumbs:{
                title:"声音",
                url:"system/voice"
              },
              z:2
            },
        },
        {
            icon:"./images/notice.png",
            title: "通知",
            introduce: `来自应用和系统的警报`,
            right: true,
            jump:{
              crumbs:{
                title:"通知",
                url:"system/notice"
              },
              z:2
            },
        },
        {
            icon:"./images/absorbed.png",
            title: "专注助手",
            introduce: `通知、自动规则`,
            right: true,
            jump:{
              crumbs:{
                title:"专注助手",
                url:"system/absorbed"
              },
              z:2
            },
        },
        {
            icon:"./images/power.png",
            title: "电源和电池",
            introduce: `睡眠、电池使用情况、节电模式`,
            right: true,
            jump:{
              crumbs:{
                title:"电源和电池",
                url:"system/power"
              },
              z:2
            },
        },
        {
            icon:"./images/storage.png",
            title: "存储",
            introduce: `存储空间、驱动器、配置规则`,
            right: true,
            jump:{
              crumbs:{
              },
              z:2
            },
        },
        {
            icon:"./images/share.png",
            title: "就近共享",
            introduce: `可发现性、收到文件的位置`,
            right: true,
            jump:{
              crumbs:{
              },
              z:2
            },
        },
        {
            icon:"./images/multitasking.png",
            title: "多任务处理",
            introduce: `贴靠窗口、桌面、任务切换`,
            right: true,
            jump:{
              crumbs:{
              },
              z:2
            },
        },
        {
            icon:"./images/activation.png",
            title: "激活",
            introduce: `激活状态、订阅、产品密钥`,
            right: true,
            jump:{
              crumbs:{
              },
              z:2
            },
        },
        {
            icon:"./images/troubleshoot.png",
            title: "疑难解答",
            introduce: `建议的疑难解答、首选项和历史记录`,
            right: true,
            jump:{
              crumbs:{
              },
              z:2
            },
        },
        {
            icon:"./images/recovery.png",
            title: "恢复",
            introduce: `重置、高级启动、返回`,
            right: true,
            jump:{
              crumbs:{
              },
              z:2
            },
        },
        {
            icon:"./images/projection.png",
            title: "投影到此电脑",
            introduce: `权限、配对PIN、可发现性`,
            right: true,
            jump:{
              crumbs:{
              },
              z:2
            },
        },
        {
            icon:"./images/remotedesktop.png",
            title: "远程桌面",
            introduce: `远程桌面用户，连接权限`,
            right: true,
            jump:{
              crumbs:{
              },
              z:2
            },
        },
        {
            icon:"./images/clipboard.png",
            title: "剪贴板",
            introduce: `剪切和复制历史记录、同步、清除`,
            right: true,
            jump:{
              crumbs:{
              },
              z:2
            },
        },
        {
            icon:"./images/info.png",
            title: "系统信息",
            introduce: `设备规格，重命名电脑、Windows规格`,
            right: true,
            jump:{
              crumbs:{
              },
              z:2
            },
        },
    ]
});