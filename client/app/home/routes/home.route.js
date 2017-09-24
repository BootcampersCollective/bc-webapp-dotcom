function homeRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.home',
			url: '',
			component: 'homeComponent',
			abstract: false,
			resolve: {
				property: function () {
					return 'property';
				},
				users: function (apiService) {
					return apiService.getUsers()
						.then(function (res) {
							console.log('Im returning in a resolve');
							return res;
						});
				}
			}
		});
}

angular.module('app.home')
	.config(homeRoute);

homeRoute.$inject = ['$stateProvider'];
