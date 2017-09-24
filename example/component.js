const appComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.public = public;

		ctrl.$onInit = function () {};
		ctrl.$postLink = function () {};
		ctrl.$onChange = function () {};
		ctrl.$onDestroy = function () {};

		function public() {}

		function private() {}
	},
	template: ``
};

angular.module('app')
	.component('appComponent', appComponent);

appComponent.$inject = [];
