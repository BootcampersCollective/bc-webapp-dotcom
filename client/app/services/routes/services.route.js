/*@ngInject*/
function servicesRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.services',
			url: 'services',
			component: 'servicesComponent',
			resolve: {}
		});
}

angular.module('app.services')
	.config(servicesRoute);
