const aboutComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.publicMethods = publicMethods;

		ctrl.$onInit = function () {};
		ctrl.$postLink = function () {};
		ctrl.$onChange = function () {};
		ctrl.$onDestroy = function () {};

		function publicMethods() {}

		// function privateMethod() {}
	},
	template: `<div>
<h1>about</h1>
<ul>
<li ui-sref-active="">me</li>
<li ui-sref-active="">you</li>
<li ui-sref-active="">other</li>
</ul>
</div>`
};

angular.module('app.about')
	.component('aboutComponent', aboutComponent);

aboutComponent.$inject = [];
