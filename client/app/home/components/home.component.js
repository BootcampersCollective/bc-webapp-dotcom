const homeComponent = {
	bindings: {
		property: '<',
		users: '<'
	},
	controller: /*@ngInject*/ function ($state, apiService) {
		let ctrl = this;

		ctrl.emailClick = emailClick;

		ctrl.$onInit = function () {
			console.log('check resolve property', ctrl.property);
			apiService.getUsers()
				.then(function (res) {
					console.log('Im returning in a normal controller');
					ctrl.users = res;
				});
		};
		ctrl.$postLink = function () {};
		ctrl.$onChange = function () {};
		ctrl.$onDestroy = function () {};

		function emailClick() {

		}

		function privateMethod() {}
	},
	template: `<div>
    <h1>home</h1>
    <div class="user-container">
        <ul class="user-list">
            <li ng-repeat="user in $ctrl.users">
                <div ng-click="user.clicked = !user.clicked">username: {{user.username}}</div>
                <div ng-if="user.clicked">
                    <div ng-click="$ctrl.emailClick(user.email)">email: {{user.email}}</div>
                    <div>first name: {{user.firstName}}</div>
                    <div>last name: {{user.lastName}}</div>
                </div>
            </li>
        </ul>
    </div>
    <div class="email-container">
        <ui-view></ui-view>
    </div>
</div>`
};

angular.module('app.home')
	.component('homeComponent', homeComponent);
