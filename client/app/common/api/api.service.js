function apiService($q, $http) {
	const service = {
		getTestimonials: getTestimonials,
		getProjects: getProjects,
		getCalendar: getCalendar,
		getEvents: getEvents
	};
	return service;

	function getTestimonials() {
		return $http({
			method: 'GET',
			url: '/api/testimonials'
		});
	}

	function getProjects() {
		return $http({
			method: 'GET',
			url: '/api/projects'
		});
	}

	function getCalendar() {
		return $http({
			method: 'GET',
			url: '/api/calendar'
		});
	}

	function getEvents() {
		return $http({
			method: 'GET',
			url: '/api/events'
		});
	}

	function privateMethod() {}
}

angular.module('app.common')
	.factory('apiService', apiService);

apiService.$inject = ['$q', '$http'];
