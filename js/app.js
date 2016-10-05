angular.module('miniRouting', ['ui.router']) 
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider 
			.state ('home', {
				url: '/',
				templateUrl: 'js/home/homeTmpl.html',
				controller: 'homeCtrl',	//no longer insert controller into html home page.  this will change view to this controller
			})
			.state ('settings', {
            url: '/settings',
            templateUrl: 'js/settings/settingsTmpl.html',
            controller: 'settingsCtrl'
        	})
        	.state('products', {
            url: '/products/:id',
            templateUrl: 'js/products/productTmpl.html',
            controller: 'productsCtrl'
        	});

    $urlRouterProvider
        .otherwise('/');
});
				
