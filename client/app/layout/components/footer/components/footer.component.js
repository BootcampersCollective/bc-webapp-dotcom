const footerComponent = {
	bindings: {},
	controller: /*@ngInject*/ function () {},
	template: `<div class="footer-container">
    <div class="left">
        <div>Contact Us:</div>
        <div>Address:</div>
        <div>Phone:</div>
        <div>Email:</div>
    </div>
    <div class="right">
        <div>Slack</div>
        <div>Code of Conduct</div>
        <div>Diversity Statement</div>
    </div>
</div>`
};

angular.module('app.layout')
	.component('footerComponent', footerComponent);
