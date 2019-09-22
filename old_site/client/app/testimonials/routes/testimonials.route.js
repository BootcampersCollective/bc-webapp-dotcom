/*@ngInject*/
function testimonialsRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.testimonials',
			url: 'testimonials',
			component: 'testimonialsComponent',
			resolve: {}
		});
}

angular.module('app.testimonials')
	.config(testimonialsRoute);
