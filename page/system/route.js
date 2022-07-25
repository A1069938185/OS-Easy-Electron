export const systemRoute = {
  routeName: "系统",
  routeUrl: "/system",
  templateUrl: "./page/system/system.html",
  controller: "System",
  children: [
    {
      routeName: "屏幕",
      routeUrl: "/screen",
      templateUrl: "./page/system/screen/screen.html",
      controller: "Screen",
      children: [],
    },
    {
      routeName: "声音",
      routeUrl: "/voice",
      templateUrl: "./page/system/voice/voice.html",
      controller: "Voice",
      children: [],
    },
    {
      routeName: "通知",
      routeUrl: "/notice",
      templateUrl: "./page/system/notice/notice.html",
      controller: "Notice",
      children: [],
    },
    {
      routeName: "专注助手",
      routeUrl: "/absorbed",
      templateUrl: "./page/system/absorbed/absorbed.html",
      controller: "Absorbed",
      children: [],
    },
    {
      routeName: "电池和电源",
      routeUrl: "/power",
      templateUrl: "./page/system/power/power.html",
      controller: "Power",
      children: [],
    },
  ],
};
