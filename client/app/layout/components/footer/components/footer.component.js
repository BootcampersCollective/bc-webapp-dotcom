const footerComponent = {
	bindings: {},
	controller: function () {},
	template: `<h1>footer</h1>`
};

angular.module('app.layout')
	.component('footerComponent', footerComponent);

footerComponent.$inject = [];
