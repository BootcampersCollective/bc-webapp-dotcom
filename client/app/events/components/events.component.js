const eventsComponent = {
	bindings: {},
	controller: /*@ngInject*/ function (apiService) {
		let ctrl = this;

		ctrl.publicMethods = publicMethods;

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

		function publicMethods() {}

		// function privateMethod() {}
	},
	template: `<div class="events-container">
    <h1>Events</h1>
    <div class="event" ng-repeat="event in $ctrl.events">
        <div ng-bind-html="event.description"></div>
    </div>
</div>`
};

angular.module('app.events')
	.component('eventsComponent', eventsComponent);
