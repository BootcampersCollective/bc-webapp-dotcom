const eventsComponent = {
	bindings: {},
	controller: /*@ngInject*/ function (apiService) {
		let ctrl = this;

		ctrl.eventClick = eventClick;

		ctrl.$onInit = function () {
			apiService.getEvents()
				.then(function (res) {
					ctrl.events = res.data.results;
					console.log('ctrl.events', ctrl.events);
				});
		};
		ctrl.$postLink = function () {};
		ctrl.$onChange = function () {};
		ctrl.$onDestroy = function () {};

		function eventClick(event) {
			event.detail = !event.detail;
		}

		// function privateMethod() {}
	},
	template: ``
};

angular.module('app.events')
	.component('eventsComponent', eventsComponent);
