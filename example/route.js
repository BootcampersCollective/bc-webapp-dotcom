function appRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app',
			url: '/',
			component: 'Component',
			abstract: true,
			resolve: {
				property: function () {
					return 'property';
				}
			}
		});
}

angular.module('app')
	.config(appRoute);

appRoute.$inject = ['$stateProvider'];
