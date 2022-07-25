"use strict";
import { myView } from "./page/module.js";
angular
  .module("myApp", ["ngRoute", "myView"])
  .config([
    "$locationProvider",
    "$routeProvider",
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");
      $routeProvider.otherwise({ redirectTo: "/windows-update" });
    },
  ])
  .controller(
    "myCtrl",
    function ($scope, $rootScope, $route, $location, $timeout) {
      console.log($route);
      $rootScope.value = 100;
      $rootScope.pageTran = false;
      // 失败的路由跳转动画
      // $rootScope.$on('$routeChangeStart',async()=>{
      //   console.log(1);
      //   $rootScope.pageTran=true
      //   await new Promise((res)=>{$timeout(()=>{res()},500)})
      //   console.log(2);
      // })
      $rootScope.BASE_URL = "./api/";
      //展示时请解开该功能
      $location.path("windows-update")
      //全局数据，面包屑数组
      $rootScope.crumbs = [
        {
          title: "Windows更新", //标题名称
          url: "#!/windows-update", //跳转url
          right: false, //是否带右箭头
          zIndex: 1, //路由层级
        },
      ];
      //全局跳转方法，并且在跳转的时候对面包屑数组进行操作，param为对象{title:"标题",url:"路由地址"},level为路由层级
      $rootScope.onJumpPage = async function (param, level) {
        if (!param) return;
        //如果param为'back'时，则返回上一级路由
        if (param === "back") {
          let z = this.crumbs.length;
          //如果层级为一级路由，则不需要返回上一级
          if (z === 1) return;
          //将上一级路由的信息回调进方法中
          this.onJumpPage(
            {
              title: this.crumbs[z - 2].title,
              url: this.crumbs[z - 2].url.replace("#!/", ""),
            },
            z - 1
          );
          return;
        }
        //判断跳转层级是否小于面包屑的长度，如果小于长度，则判断为返回
        if (level < this.crumbs.length) {
          //如果为返回，则将面包屑数组去掉多余层级
          this.crumbs.splice(level, this.crumbs.length);
        }
        //将面包屑对应层级改为传进来的数据
        this.crumbs[level - 1] = {
          title: param.title,
          url: "#!/" + param.url,
          right: level !== 1, //通过层级判断是否有右箭头
          zIndex: level, //记录层级
        };
        //路由跳转动画
        await new Promise((res) => {
          $rootScope.pageTran = true;
          $timeout(() => {
            //进行跳转
            $location.path(param.url);
            res();
          }, 100);
        });
        await new Promise((res) => {
          $rootScope.pageTran = false;
          $timeout(() => {
            res();
          }, 100);
        });
      };
      //菜单列表
      $scope.menuList = [
        { href: "system", name: "系统", img: "system" },
        { href: "view2", name: "蓝牙和其他设备", img: "bluetooth" },
        { href: "view3", name: "网络及Internet", img: "wifi" },
        { href: "view4", name: "个性化", img: "pen" },
        { href: "view5", name: "应用", img: "app" },
        { href: "view6", name: "账户", img: "account" },
        { href: "time-and-language", name: "时间和语言", img: "time" },
        { href: "view8", name: "游戏", img: "game" },
        { href: "view9", name: "辅助功能", img: "auxiliary" },
        { href: "view10", name: "隐私和安全性", img: "security" },
        { href: "windows-update", name: "Windows更新", img: "update" },
      ];
      //菜单滑块
      $scope.menuAct = "update";
      $scope.menuClick = function (item) {
        $scope.menuAct = item.img;
        this.onJumpPage({ title: item.name, url: item.href }, 1);
      };
      $scope.closed = false
      $scope.maximized = false
      $scope.minimized = false
      $scope.close = ()=>{
        $scope.closed = true
      }
      $scope.maximize = ()=>{
        $scope.maximized = !$scope.maximized
      }
      $scope.minimize = ()=>{
        $scope.minimized = !$scope.minimized
      }
    }
  );
