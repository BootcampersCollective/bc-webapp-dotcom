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
	template: `<div>
	<h1>Services</h1>
</div>`
};

angular.module('app.services')
	.component('servicesComponent', servicesComponent);
