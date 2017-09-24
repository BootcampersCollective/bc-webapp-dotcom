function aboutRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.about',
			url: 'about',
			component: 'aboutComponent',
			resolve: {}
		});
}

angular.module('app.about')
	.config(aboutRoute);

aboutRoute.$inject = ['$stateProvider'];