angular.module('web_dropoutforecast').controller('redesCtrl', ['$scope', function ($scope) {
	var ctrl = this;
	ctrl.init = function () {
		window['FB'].XFBML.parse();
	}
	ctrl.init();
}])
