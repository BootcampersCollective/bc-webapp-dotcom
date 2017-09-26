const aboutComponent = {
	bindings: {},
	controller: /*@ngInject*/ function () {
		let ctrl = this;

		ctrl.publicMethods = publicMethods;

		ctrl.$onInit = function () {};
		ctrl.$postLink = function () {};
		ctrl.$onChange = function () {};
		ctrl.$onDestroy = function () {};

		function publicMethods() {}

		// function privateMethod() {}
	},
	template: `<div class="mission-container">
    <div class="mission-goals">
        <h1>Bootcampers Collective is...</h1>
        <div>
            <span>HOME</span> - for the restless developer who wants to take on a new challenge.
        </div>
        <div>
            <span>SUPPORT</span> - for the creative with brilliant ideas but no one to build them.
        </div>
        <div>
            <span>RESPECT</span> - for the junior developer striving to etch a unique role in the workforce.
        </div>
        <div>
            <span>HANDS-ON</span> - for the insatiable tinkerer and innovator inside us all.
        </div>
        <div>
            <span>FUN</span> - because no one said we could not be kids outside work.
        </div>
        <div>
            <span>YOU</span> - because no team is valued greater than the sum of its parts.
        </div>
    </div>
    
    <div class="mission-statement">
        <div class="label">Mission Statement:</div>
        <div>Bootcampers Collective is dedicated to accelerating the career pursuits of past, present, and future Coding Bootcamp and Self-taught students by empowering them with experiential learning in web development, leadership opportunities, life-long camaraderie, and the ability to write code that positively impacts small businesses, nonprofits, and the community-at-large in Colorado.</div>
    </div>
</div>`
};

angular.module('app.about')
	.component('aboutComponent', aboutComponent);

aboutComponent.$inject = [];
