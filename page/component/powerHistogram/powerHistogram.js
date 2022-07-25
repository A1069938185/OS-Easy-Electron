"use strict";
export const powerHistogramComponent = angular
  .module("powerHistogramComponent", [])
  .component("powerHistogram", {
    templateUrl: "./page/component/powerHistogram/powerHistogram.html",
    transclude: false,
    bindings: {
      list:"=",
    },
    require: {},
    controller: function PowerHistogram($scope) {
      // Generate data
      this.category = [];
      this.dottedBase = new Date();
      this.barData = [];
      let b = 100
      let min = Math.round(Math.random() * 50 )
      let flag = false
      for (let i = 0; i <= 24; i++) {
        let date = new Date((this.dottedBase += 3600 * 24 * 1000));
        this.category.push(
          (date.getHours() - 24 + i <= 0
            ? date.getHours() - 24 + i + 24
            : date.getHours() - 24 + i) + ":00"
        );
        if(flag){
          b = b + Math.round(Math.random() * 20 )
        }else{
          b = b - Math.round(Math.random() * 10 )
        }
        if(b<=min){
          flag = true
        }
        if(b>=90){
          flag = false
        }
        this.barData.push(b);
      }
      this.option = {
        backgroundColor: "",
        tooltip: {
          trigger: "axis",
          formatter: "{c}%",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          data: this.category,
          offset: -5,
          axisLine: {
            show: false,
            lineStyle: {
              width: 0,
              color: "#ccc",
            },
          },
          axisTick: {
            interval: (index) => {
              if (index % 6 != 0 || index == 24) {
                return false;
              }
              return true;
            },
            length: 10,
            lineStyle: {},
          },
          axisLabel: {
            interval: (index) => {
              if (index % 6 != 0 || index == 25) {
                return false;
              }
              return true;
            },
            margin: 16,
          },
        },
        yAxis: {
          name: "电池电量",
          type: "value",
          splitNumber: 2,
          scale: false,
          nameTextStyle: {
            color: "black",
            fontFamily: "Microsoft YaHei",
            fontSize: 14,
            align: "center",
            lineHeight: 36,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ["transparent", "#ccc", "#ccc"],
            },
          },
          axisLine: {
            lineStyle: {
              color: "#ccc",
            },
          },
          axisLabel: {
            formatter: "{value}%",
          },
        },
        series: [
          {
            type: "bar",
            barWidth: 10,
            emphasis: {
              label: {
                show: false,
              },
            },
            itemStyle: {
              borderRadius: 5,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#43eec6" },
                { offset: 1, color: "#14c8d4" },
              ]),
            },
            data: this.barData,
          },
        ],
      };
      this.$onInit = () => {
        var myChart = echarts.init(document.getElementById("powerHistogram"));
        myChart.setOption(this.option);
      };
    },
  });
