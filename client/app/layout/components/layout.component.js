const layoutComponent = {
	bindings: {},
	controller: /*@ngInject*/ function () {},
	template: `<div class="container">
    <div class="header-div">
        <header-component></header-component>
    </div>
    <div class="body-div">
        <body-component></body-component>
    </div>
</div>`
};

angular.module('app.layout')
	.component('layoutComponent', layoutComponent);
