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
            <img src="{{testimonial.image}}" ng-if="testimonial.image">
            <div>
                <div class="name">
                    {{testimonial.name}}
                </div>
                <div ng-if="testimonial.position" class="position">
                    {{testimonial.position}}
                </div>
                <div class="description">
                    {{testimonial.long}}
                </div>
            </div>
        </div>
    </div>
</div>`
};

angular.module('app.testimonials')
	.component('testimonialsComponent', testimonialsComponent);
