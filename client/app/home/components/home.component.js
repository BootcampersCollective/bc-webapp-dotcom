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
    <div class="client-container">
        <h1>Who are our clients?</h1>
        <div class="client-text">
            We are a full service web development shop that assists small to mid size businesses and non-profits with websites and applications through a highly customized and personable approach.  Here's a few of our clients who we have helped in the past.
        </div>
        <div class="client-images">
            <img src="https://bc-webapp-assets.nyc3.digitaloceanspaces.com/clients/5340CoffeeLogo.png">
            <img src="https://bc-webapp-assets.nyc3.digitaloceanspaces.com/clients/awp.png">
            <img src="https://bc-webapp-assets.nyc3.digitaloceanspaces.com/clients/rowdyMermaidWordyLogo.png">
        </div>
    </div>
</div>`
};

angular.module('app.home')
	.component('homeComponent', homeComponent);
