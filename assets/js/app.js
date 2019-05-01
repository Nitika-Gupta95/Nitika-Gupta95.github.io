var app = angular.module('PortFolio',[]);

app.controller("PortfolioController", function($scope, $interval){
  window.scope = $scope
  $scope.view ={};
  $scope.word ={};
  $scope.word.skill = ['ASP.NET MVC','JQuery','PowerCenter'];
  
  var idx=0;
  var n=0;
  var up = true;

  $interval(function(){
    var word = $scope.word.skill[idx];
    var ln = word.length;

    if(up){
      $scope.view.type = word.slice(0,n);
      n++
    };
    if(n===ln+1){up=false};
    if(!up){
      $scope.view.type = word.slice(0,n);
      n--
    }
    if(n===0){
      up=true
      idx++
    }
    if(idx===$scope.word.skill.length){idx=0}
    
  }, 120);

})