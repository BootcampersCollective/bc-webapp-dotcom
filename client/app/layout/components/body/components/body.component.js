const bodyComponent = {
	bindings: {},
	controller: function () {},
	template: `<div class="body-container">
    <ui-view></ui-view>
</div>`
};

angular.module('app.layout')
	.component('bodyComponent', bodyComponent);

bodyComponent.$inject = [];
