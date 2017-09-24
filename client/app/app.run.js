/*@ngInject*/
function appTransitions($rootScope, $trace) {
	$trace.enable('TRANSITION');

	$rootScope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams) {
		console.log('$stateChangeStart ' + fromState.name + JSON.stringify(fromParams) +
			' -> ' + toState.name + JSON.stringify(toParams));
	});
	$rootScope.$on('$stateChangeSuccess', function (evt, toState, toParams, fromState, fromParams) {
		console.log('$stateChangeSuccess ' + fromState.name + JSON.stringify(fromParams) +
			' -> ' + toState.name + JSON.stringify(toParams));
	});
	$rootScope.$on('$stateChangeError', function (evt, toState, toParams, fromState, fromParams) {
		console.log('$stateChangeError ' + fromState.name + JSON.stringify(fromParams) +
			' -> ' + toState.name + JSON.stringify(toParams));
	});
}

/*@ngInject*/
function authCheck($transitions, $state) {
	$transitions.onBefore({to: 'app.about'}, function (trans) {
		var api = trans.injector().get('apiService');
		api.checkAuth({token: '123456'})
			.catch(function (err) {
				console.log('failed auth', err);
				$state.go('app.home');
			});

	});
}

angular.module('app')
	.run(appTransitions)
	.run(authCheck);
