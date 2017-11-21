const registerComponent = {
	bindings: {},
	controller: /*@ngInject*/ function (apiService) {
		let ctrl = this;

		ctrl.$onInit = function () {
			
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
    <h1>Register</h1>
    <form name="registerForm">

    </form>
</div>`
};

angular.module('app.register')
	.component('registerComponent', registerComponent);