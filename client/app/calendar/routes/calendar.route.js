/*@ngInject*/
function calendarRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.calendar',
			url: 'calendar',
			component: 'calendarComponent',
			resolve: {}
		});
}

angular.module('app.calendar')
	.config(calendarRoute);
