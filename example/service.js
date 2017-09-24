function appService() {
	let variable = {};
	const service = {
		method: method
	};
	return service;

	function method() {}

	function private() {}
}

angular.module('app')
	.factory('appService', appService);

appService.$inject = [];
