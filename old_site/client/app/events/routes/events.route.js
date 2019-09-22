/*@ngInject*/
function eventsRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.events',
			url: 'events',
			component: 'eventsComponent',
			resolve: {}
		});
}

angular.module('app.events')
	.config(eventsRoute);
