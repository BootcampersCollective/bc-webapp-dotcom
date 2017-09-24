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
	template: `<div>
    <h1>home</h1>
    <div class="email-container">
        <ui-view></ui-view>
    </div>
</div>`
};

angular.module('app.home')
	.component('homeComponent', homeComponent);
