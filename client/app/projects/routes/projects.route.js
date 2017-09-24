/*@ngInject*/
function projectsRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.projects',
			url: 'projects',
			component: 'projectsComponent',
			resolve: {}
		});
}

angular.module('app.projects')
	.config(projectsRoute);
