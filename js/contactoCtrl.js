angular.module('web_dropoutforecast').controller('contactoCtrl',['$scope','$http',function($scope,$http){
    var ctrl = this;
    $scope.data = {
        'name':"",
        'email':"",
        'subject':"",
        'message':""
    };
    $scope.flag = false;
    $scope.send_contact_form = function(){
        $http.post('http://localhost:80/dropoutforecast/mail.php',$scope.data).then(function(res){
            if(res.data.status == 0){
                $scope.flag = true;
                $scope.message = {
                    'bool':true
                };
            }
            else{
                $scope.message = {
                    'bool':false
                };
            }
            
        },function(res){
            $scope.flag = true;
            $scope.message = {
                'bool':false
            };
        });
    };
}]);