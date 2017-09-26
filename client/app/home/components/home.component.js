// TODO: Add Animations to home component
const homeComponent = {
	bindings: {
		property: '<',
		users: '<'
	},
	controller: /*@ngInject*/ function () {
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
    <div class="work-container">
        <h1>How does it work?</h1>
    </div>
    <div class="flow-container">
        <div class="slack-image">
            <img src="https://bc-webapp-assets.nyc3.digitaloceanspaces.com/logos/icons8-Slack-512.png">
            <div class="sub-title">
                Join us on Slack
            </div>
        </div>
        <div class="arrow-image">
            <img src="https://bc-webapp-assets.nyc3.digitaloceanspaces.com/logos/arrow.png">
        </div>
        <div class="coding-image">
            <img src="https://bc-webapp-assets.nyc3.digitaloceanspaces.com/logos/coding.png">
            <div class="sub-title">
                Start coding on real client projects
            </div>
        </div>
        <div class="arrow-image">
            <img src="https://bc-webapp-assets.nyc3.digitaloceanspaces.com/logos/arrow.png">
        </div>
        <div class="money-image">
            <img src="https://bc-webapp-assets.nyc3.digitaloceanspaces.com/logos/money.png">
            <div class="sub-title">
                Earn a little cash
            </div>
        </div>
    </div>
</div>`
};

angular.module('app.home')
	.component('homeComponent', homeComponent);
