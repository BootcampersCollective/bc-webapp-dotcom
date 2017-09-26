const headerComponent = {
	bindings: {},
	controller: /*@ngInject*/ function () {
		let ctrl = this;
		ctrl.nav = nav;
		ctrl.$onInit = function () {};

		function nav() {
			if(ctrl.dropdown) {
				ctrl.dropdown = false;
			}
		}

	},
	template: `<div class="header-container">
    <div class="link-bar" ng-class="{'dropdown': $ctrl.dropdown}">
        <a class="link-button" ui-sref="app.about" ui-sref-active="active" ng-click="$ctrl.nav()">Our Mission</a>
        <a class="link-button" ui-sref="app.testimonials" ui-sref-active="active"
           ng-click="$ctrl.nav()">Testimonials</a>
        <a class="link-button" ui-sref="app.projects" ui-sref-active="active" ng-click="$ctrl.nav()">Latest Work</a>
        <a class="link-button" ui-sref="app.services" ui-sref-active="active" ng-click="$ctrl.nav()">Services</a>
        <a class="link-button" ui-sref="app.events" ui-sref-active="active" ng-click="$ctrl.nav()">Events</a>
        <a class="link-button" href="http://45.55.10.167/" target="_blank" disabled>Join Us</a>
    </div>
    <div class="responsive-menu" ng-click="$ctrl.dropdown = !$ctrl.dropdown">
        <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
    </div>
</div>`
};

angular.module('app.layout')
	.component('headerComponent', headerComponent);
