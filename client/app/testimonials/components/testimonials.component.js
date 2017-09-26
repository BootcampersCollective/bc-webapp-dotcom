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
	template: `<div>
    <h1>Testimonials</h1>
    <div class="testimonial-container">
        <div class="testimonial-block" ng-repeat="testimonial in $ctrl.testimonials">
            <img src="{{testimonial.image}}">
            <span>Name: {{testimonial.name}}</span>
            <div>
                {{testimonial.long}}
            </div>
        </div>
    </div>
</div>`
};

angular.module('app.testimonials')
	.component('testimonialsComponent', testimonialsComponent);
