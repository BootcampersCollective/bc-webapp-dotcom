const calendarComponent = {
	bindings: {},
	controller: /*@ngInject*/ function (apiService) {
		let ctrl = this;

		ctrl.publicMethods = publicMethods;

		ctrl.$onInit = function () {
			apiService.getCalendar()
				.then(function (res) {
					ctrl.calendar = res.data;
				});
		};
		ctrl.$postLink = function () {};
		ctrl.$onChange = function () {};
		ctrl.$onDestroy = function () {};

		function publicMethods() {}

		// function privateMethod() {}
	},
	template: `<div>
    <h1>Calendar</h1>
    <div class="calendar-container">
        {{$ctrl.calendar}}
    </div>
</div>`
};

angular.module('app.calendar')
	.component('calendarComponent', calendarComponent);
