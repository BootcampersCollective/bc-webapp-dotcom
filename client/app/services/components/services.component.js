const servicesComponent = {
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
	template: `<div class="services-container">
    <div class="business-service">
        <h1>How we help...Businesses</h1>
        <div class="service-group">
            <h3>Web Services</h3>
            <ul>
                <li>Assisting businesses with overflow projects in a timely and professional manner.</li>
                <li>Developing highly customized websites for startups & small businesses.</li>
            </ul>
        </div>
        <div class="service-group">
            <h1>Talent Services</h1>
            <ul>
                <li>Identifying talent at all levels & matching to employers based on skills.</li>
                <li>Post your openings to our job board on Slack.</li>
                <li>Better career preparations for Web Devs.</li>
                <li>Host a hiring or educational event with us!</li>
            </ul>
        </div>
    </div>
    <div class="member-service">
        <h1>How we help...Members</h1>
        <div class="service-group">
            <h1>Web Services</h1>
            <ul>
                <li>Hackathons - Hands-on learning and valuable experience for your resume.</li>
                <li>Projects - The ability to work on live code and contribute your skills to real businesses in the community. Challenge yourself here!</li>
                <li>Make some money assisting with our paid work.</li>
            </ul>
        </div>
        <div class="service-group">
            <h1>Career Services</h1>
            <ul>
                <li>Career consulting and interview preparation for Developers seeking local opportunities.</li>
                <li>Educational and career-focused events on Meetup.</li>
                <li>Job board on Slack.</li>
            </ul>
        </div>
    </div>
</div>`
};

angular.module('app.services')
	.component('servicesComponent', servicesComponent);
