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
	template: `<div class="events-container">
    <h1>Events</h1>
    <div class="event" ng-repeat="event in $ctrl.events">
        <div class="row" ng-class="{'open': event.detail}">
            <div class="event-name"
                  ng-click="$ctrl.eventClick(event)">{{event.name}}</div>
            <div class="event-url">
                <a href="{{event.event_url}}"><i class="fa fa-meetup fa-2x" aria-hidden="true"></i></a>
            </div>
        </div>
        <div class="event-details" ng-show="event.detail">
            <div class="event-time">{{event.time | date : 'M/d/yy h:mm a'}}</div>
            <div class="event-vanue-name">{{event.venue.name}}</div>
            <div class="event-venue-address">
                <span ng-bind-html="event.venue.address_1"></span>,
                <span ng-bind-html="event.venue.city"></span>
            </div>
            <div class="event-description" ng-bind-html="event.description"></div>
        </div>
    </div>
</div>`
};

angular.module('app.events')
	.component('eventsComponent', eventsComponent);
