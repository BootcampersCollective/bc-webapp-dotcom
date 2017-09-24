/*@ngInject*/
function homeRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.home',
			url: '',
			component: 'homeComponent',
			abstract: false
		});
}

angular.module('app.home')
	.config(homeRoute);
