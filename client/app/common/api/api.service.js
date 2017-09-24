function apiService($q, $http) {
	const service = {
		getTestimonials: getTestimonials,
		getProjects: getProjects
	};
	return service;

	function getTestimonials() {

	}

	function getProjects() {

	}

	function privateMethod() {}
}

angular.module('app.common')
	.factory('apiService', apiService);

apiService.$inject = ['$q', '$http'];
