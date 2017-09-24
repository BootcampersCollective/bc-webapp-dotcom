const projectsComponent = {
	bindings: {},
	controller: /*@ngInject*/ function (apiService) {
		let ctrl = this;

		ctrl.publicMethods = publicMethods;

		ctrl.$onInit = function () {
			apiService.getProjects()
				.then(function (res) {
					ctrl.projects = res.data;
				});
		};
		ctrl.$postLink = function () {};
		ctrl.$onChange = function () {};
		ctrl.$onDestroy = function () {};

		function publicMethods() {}

		// function privateMethod() {}
	},
	template: `<div>
    <h1>Projects</h1>
    <div class="projects-container">
        <div ng-repeat="project in $ctrl.projects">
            {{project}}
        </div>
    </div>
</div>`
};

angular.module('app.projects')
	.component('projectsComponent', projectsComponent);
