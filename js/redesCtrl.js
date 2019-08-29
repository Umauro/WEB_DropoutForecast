angular.module('web_dropoutforecast').controller('redesCtrl',['$scope',function($scope){
  var ctrl = this;
  ctrl.init = function(){
    console.log("hola");
    window['FB'].XFBML.parse();
  }
  ctrl.init();
}])
