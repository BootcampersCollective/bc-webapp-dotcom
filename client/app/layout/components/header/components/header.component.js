const headerComponent = {
	bindings: {},
	controller: /*@ngInject*/ function () {
		let ctrl = this;

		ctrl.$onInit = function () {};

	},
	template: `<div class="header-container">
    <div class="logo-container">
        <img src="http://via.placeholder.com/150x50">
    </div>
    <div class="link-bar">
        <div class="link-button">
            <a ui-sref="app.home">Home</a>
        </div>
        <div class="link-button">
            <a ui-sref="app.about">About</a>
        </div>
        <div class="link-button">
            <a ui-sref="app.testimonials">Testimonials</a>
        </div>
        <div class="link-button">
            <a ui-sref="app.projects">Projects</a>
        </div>
        <div class="link-button">
            <a ui-sref="app.calendar">Calendar</a>
        </div>
    </div>
    <div class="menu-container">
        <i class="fa fa-user" aria-hidden="true"></i>
    </div>
</div>`
};

angular.module('app.layout')
	.component('headerComponent', headerComponent);
