const headerComponent = {
	bindings: {},
	controller: /*@ngInject*/ function () {
		let ctrl = this;

		ctrl.$onInit = function () {};

	},
	template: `<div class="header">
    <div class="logo-container">
        <img src="http://via.placeholder.com/150x50">
    </div>
    <div class="link-bar">
        <a ui-sref="app.home">Home</a>
        <a ui-sref="app.about">About</a>
        <a ui-sref="app.testimonials">Testimonials</a>
        <a ui-sref="app.projects">Projects</a>
        <a ui-sref="app.calendar">Calendar</a>
    </div>
    <div class="menu-container">
        <i class="fa fa-user" aria-hidden="true"></i>
    </div>
</div>`
};

angular.module('app.layout')
	.component('headerComponent', headerComponent);
