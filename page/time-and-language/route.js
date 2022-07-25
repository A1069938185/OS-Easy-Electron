export const timeAndLanguageRoute =
  {
    routeName: "时间和语言",
    routeUrl: "/time-and-language",
    templateUrl: "./page/time-and-language/time-and-language.html",
    controller: "TimeAndLanguage",
    children: [
      {
        routeName: "语言与区域",
        routeUrl: "/language-and-region",
        templateUrl:
          "page/time-and-language/language-and-region/language-and-region.html",
        controller: "LanguageAndRegion",
        children: [],
      },
      {
        routeName: "输入",
        routeUrl: "/entry",
        templateUrl: "page/time-and-language/entry/entry.html",
        controller: "Entry",
        children: [
          {
            routeName: "键入见解",
            routeUrl: "/entry-opinion",
            templateUrl:
              "page/time-and-language/entry/entry-opinion/entry-opinion.html",
            controller: "EntryOpinion",
            children: [],
          },
        ],
      },
      {
        routeName: "日期和时间",
        routeUrl: "/date-and-time",
        templateUrl: "page/time-and-language/date-and-time/date-and-time.html",
        controller: "DateAndTime",
        children: [],
      },
    ],
  }
