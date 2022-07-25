{
  icon:"./images/language.png",
  title: "标题",
  introduce: `介绍`,
  introduceList: ['介绍1','介绍2'],
  disable:false,
  right: true,
  blank: true,
  arrow: true,
  label:$scope,
  jump:{
    crumbs:{
      title:"输入",
      url:"time-and-language/entry"
    },
    z:2
  },
  config: {
    switch: {
      value: $scope,
      label: ["开", "关"],
    },
    button:{
      color:'blue',
      size:'default',
      name:"添加语言",
      clickFn:$scope
    },
    btnlist:[
      {
        color:'blue',
        size:'default',
        name:"添加语言"
      },
    ],
    slider:{
      value:100,
      imgs:['./images/novoice.png','./images/lowvoice.png','./images/voice.png'],
      tag:""
    },
    downList:{
      value:$scope,
      list:$scope,
      size:"long",
      changeFn:function(){},
    },
    expand:{
      options:[
        {
          icon:"./images/language.png",
          name:"语言选项"
        },
      ]
    }
    details:{
      infobox:{
        list:$scope
      },
      radiobox:{
        value:$scope.value,
        list:[
          {
            name:"关",
            introduce:"关",
            method:"关",
            value:"1",
          }
        ]
      },
      button:{
        size:"medium",
        name:"更改格式"
      },
      optionsbox: {
        checkboxlist: [
          {
            value: "",
            name: "在我输入内容时播放按键声音",
          },
        ],
        cardlist:[{}],
        btnlist:[
          {
            name:"",
            button:{
              name:"",
              size:"default",
              color:""
            }
          }
        ]
      },
    },
  },
}

$scope.$watch("cardList0[1].config.switch.value",(n,o)=>{
  $scope.from.autoTime = n
  $scope.cardList0[2].disable = n
})


<div class="option">
  <p>更多选项</p>
  <card
    card="card"
    ng-click="onJumpPage(card.jump.crumbs,card.jump.z)"
    ng-repeat="card in cardList2"
  ></card>
</div>