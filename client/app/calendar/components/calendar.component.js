const calendarComponent = {
	bindings: {},
	controller: /*@ngInject*/ function () {
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
<h1>Calendar</h1>
</div>`
};

angular.module('app.calendar')
	.component('calendarComponent', calendarComponent);
