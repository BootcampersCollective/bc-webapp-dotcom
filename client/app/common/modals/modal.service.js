function modalService() {
	let variable = {};
	const service = {
		method: method
	};
	return service;

	function method() {}

	function privateMethod() {}
}

angular.module('app.common')
	.factory('modalService', modalService);

modalService.$inject = [];
