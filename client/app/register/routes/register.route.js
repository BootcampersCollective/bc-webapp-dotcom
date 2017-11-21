/*@ngInject*/
function registerRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.register',
			url: 'register',
			component: 'registerComponent',
			resolve: {}
		});
}

angular.module('app.register')
	.config(registerRoute);