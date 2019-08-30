angular.module('web_dropoutforecast').controller('contactoCtrl',['$scope','$http',function($scope,$http){
    var ctrl = this;
    $scope.data = {
        'name':"",
        'email':"",
        'subject':"",
        'message':""
    };
    $scope.message_res = "";

    ctrl.send_contact_form = function(){
        $http.post('/mail.php',data).then(function(res){
            $scope.message = "Gracias por tu mensaje, pronto nos comunicaremos contigo";
        },function(res){
            $scope.message = "Error al procesar el mensaje";
        });
    };
}]);