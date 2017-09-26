const servicesComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.publicMethods = publicMethods;

		ctrl.$onInit = function () {};
		ctrl.$postLink = function () {};
		ctrl.$onChange = function () {};
		ctrl.$onDestroy = function () {};

		function publicMethods() {}

		// function privateMethod() {}
	},
	template: `<div class="services-container">
    <div class="service-group">
        <h1>Web Services</h1>
        <div class="service-text">
            Developing websites for consumers & Consulting for small businesses and startups</div>
    </div>
    <div class="service-group">
        <h1>Career Services</h1>
        <div class="service-text">Providing web developers with career coaching and support (job search, interviewing, strategy) and organizing career-focused events</div>
    </div>
</div>`
};

angular.module('app.services')
	.component('servicesComponent', servicesComponent);
