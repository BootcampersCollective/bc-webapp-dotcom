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
	template: ``
};

angular.module('app.layout')
	.component('headerComponent', headerComponent);
