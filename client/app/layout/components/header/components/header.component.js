const headerComponent = {
	bindings: {},
	controller: /*@ngInject*/ function () {
		let ctrl = this;

		ctrl.$onInit = function () {};

	},
	template: `<div class="link-bar" style="background-color: lightgreen; height: 80px;">
    <a ui-sref="app.home">Home</a>
    <a ui-sref="app.about">About</a>
</div>`
};

angular.module('app.layout')
	.component('headerComponent', headerComponent);
