const homeComponent = {
	bindings: {
		property: '<',
		users: '<'
	},
	controller: /*@ngInject*/ function ($state, apiService) {
		let ctrl = this;

		ctrl.emailClick = emailClick;

		ctrl.$onInit = function () {

		};
		ctrl.$postLink = function () {};
		ctrl.$onChange = function () {};
		ctrl.$onDestroy = function () {};

		function emailClick() {

		}

		function privateMethod() {}
	},
	template: `<div class="home-container">
    <img src="https://bc-webapp-assets.nyc3.digitaloceanspaces.com/logos/bc-logo-NEW.png">
</div>`
};

angular.module('app.home')
	.component('homeComponent', homeComponent);
