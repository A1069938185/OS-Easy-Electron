'use strict';
export const entryOpinion =
angular.module('entry-opinion', ['ngRoute'])
.controller('EntryOpinion', function($scope,$http) {
  $scope.from={
    switch0:false,
    switch1:false,
    language:'',
    country:'',
    region:''
  }
  $scope.arrowClass=true
  $scope.languageList=[]
  $scope.getLanguage = function(){
    if(this.languageList.length>=1)return
    $http({
      method:'GET',
      url:this.BASE_URL+'language.json'
    }).then((res)=>{
      this.languageList = res.data
    })
  }

});