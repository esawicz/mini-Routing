angular.module('miniRouting').controller('productsCtrl', function($scope, $stateParams, productsService) {
	if ($stateParams.id === 'shoes') {
		$scope.products = productsService.shoeData;
	}

	if ($stateParams.id === 'socks') {
		$scope.products = productsService.sockData;
	}
});