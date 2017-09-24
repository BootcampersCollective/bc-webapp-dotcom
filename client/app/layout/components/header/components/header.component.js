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
    <div class="logo-container">
        <img src="http://via.placeholder.com/150x50">
    </div>
    <div class="link-bar" ng-class="{'dropdown': $ctrl.dropdown}">
        <a class="link-button" ui-sref="app.home" ui-sref-active="active" ng-click="$ctrl.nav()">Home</a>
        <a class="link-button" ui-sref="app.about" ui-sref-active="active" ng-click="$ctrl.nav()">About</a>
        <a class="link-button" ui-sref="app.testimonials" ui-sref-active="active"
           ng-click="$ctrl.nav()">Testimonials</a>
        <a class="link-button" ui-sref="app.projects" ui-sref-active="active" ng-click="$ctrl.nav()">Projects</a>
        <a class="link-button" ui-sref="app.calendar" ui-sref-active="active" ng-click="$ctrl.nav()">Calendar</a>
    </div>
    <div class="menu-container" ng-click="$ctrl.userMenu = !$ctrl.userMenu">
        <i class="fa fa-user fa-2x" aria-hidden="true"></i>
    </div>
    <div class="user-menu" ng-if="$ctrl.userMenu">
        <div class="menu-button">Login</div>
        <div class="menu-button">Logout</div>
    </div>
    <div class="responsive-menu" ng-click="$ctrl.dropdown = !$ctrl.dropdown">
        <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
    </div>
</div>`
};

angular.module('app.layout')
	.component('headerComponent', headerComponent);
