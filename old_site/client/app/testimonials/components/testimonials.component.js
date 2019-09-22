const testimonialsComponent = {
	bindings: {},
	controller: /*@ngInject*/ function (apiService) {
		let ctrl = this;

		ctrl.publicMethods = publicMethods;

		ctrl.$onInit = function () {
			apiService.getTestimonials()
				.then(function (res) {
					console.log('getTestimonials res', res);
					ctrl.testimonials = res.data;
				});
		};
		ctrl.$postLink = function () {};
		ctrl.$onChange = function () {};
		ctrl.$onDestroy = function () {};

		function publicMethods() {}

		// function privateMethod() {}
	},
	template: ``
};

angular.module('app.testimonials')
	.component('testimonialsComponent', testimonialsComponent);
