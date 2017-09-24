const bodyComponent = {
	bindings: {},
	controller: function () {},
	template: `<div class="body-container" style="height: 250px; overflow-y: scroll;">
    <ui-view></ui-view>
</div>`
};

angular.module('app.layout')
	.component('bodyComponent', bodyComponent);

bodyComponent.$inject = [];
