var app = angular.module('olx', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/productDetails');

	$stateProvider.state('productDetails', {
		url : '/productDetails',
		templateUrl : 'app/views/productDetails.html',
		controller : 'productCtrl',
		cache : true
	})/*
	.state('productDetails.description', {
			url : '/productDetails/productDescription',
			templateUrl : 'app/views/productDescription.html',
			controller : 'productDescCtrl',
			cache : true
		});*/
	
});
