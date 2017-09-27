/*@ngInject*/
function baseRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app',
			url: '/',
			// view: {
			// 	'': {template: '<layout-component></layout-component>'},
			// 	'header@app': {component: headerComponent},
			// 	'body@app': {component: bodyComponent},
			// 	'footer@app': {component: footerComponent}
			// },
			template: '<layout-component></layout-component>',
			abstract: true,
			resolve: {}
		});
}

angular.module('app.core')
	.config(baseRoute);
