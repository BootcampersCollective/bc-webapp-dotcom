const projectsComponent = {
	bindings: {},
	controller: /*@ngInject*/ function (apiService) {
		let ctrl = this;

		ctrl.publicMethods = publicMethods;

		ctrl.$onInit = function () {
			apiService.getProjects()
				.then(function (res) {
					ctrl.projects = res.data;
					console.log('check project', ctrl.projects, ctrl.projects.length);
				});
		};
		ctrl.$postLink = function () {};
		ctrl.$onChange = function () {};
		ctrl.$onDestroy = function () {};

		function publicMethods() {}

		// function privateMethod() {}
	},
	template: `<div class="projects-container">
    <div class="project-card" ng-repeat="project in $ctrl.projects" ng-if="$ctrl.projects.length > 1">
        <h3>{{project.name}}</h3>
        <div class="project-description">{{project.description}}</div>
        <div class="image-row">
            <img ng-repeat="image in project.images track by $index" src="{{image}}">
        </div>
    </div>
    <div class="coming-soon" ng-if="$ctrl.projects.length < 2">
        <h1>Coming Soon!</h1>
    </div>
</div>`
};

angular.module('app.projects')
	.component('projectsComponent', projectsComponent);
