const footerComponent = {
	bindings: {},
	controller: function () {},
	template: `<div class="footer-container">
    <h1>footer</h1>
</div>`
};

angular.module('app.layout')
	.component('footerComponent', footerComponent);

footerComponent.$inject = [];
