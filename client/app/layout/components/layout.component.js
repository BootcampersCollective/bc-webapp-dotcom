const layoutComponent = {
	bindings: {},
	controller: /*@ngInject*/ function () {},
	template: `<div class="container">
    <div>
        <!--<div ui-view="header"></ui-view>-->
        <header-component></header-component>
    </div>
    <div>
        <!--<div ui-view="body"></ui-view>-->
        <body-component></body-component>
    </div>
    <div>
        <!--<div ui-view="footer"></ui-view>-->
        <footer-component></footer-component>
    </div>
</div>`
};

angular.module('app.layout')
	.component('layoutComponent', layoutComponent);
