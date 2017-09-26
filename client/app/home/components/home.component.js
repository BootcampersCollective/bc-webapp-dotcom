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
    <div class="image-container">
        <img src="https://bc-webapp-assets.nyc3.digitaloceanspaces.com/logos/bc-logo-NEW.png">
    </div>
    <div class="text-container">
        <h2>How it works?</h2>
        <h2><i class="fa fa-slack"></i>  Join Us on Slack</h2>
    </div>
</div>`
};

angular.module('app.home')
	.component('homeComponent', homeComponent);
