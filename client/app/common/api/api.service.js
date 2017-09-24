function apiService($q, $http) {
	let variable = {
		test: true
	};
	const service = {
		checkAuth: checkAuth,
		getUsers: getUsers
	};
	return service;

	function checkAuth(data) {
		let defer = $q.defer();
		console.log('checkAuth data', data);
		$http({
			method: 'POST',
			url: 'api/auth',
			data: data
		})
			.then(function (res) {
				defer.resolve(res.data);
			})
			.catch(function (err) {
				defer.reject(err);
			});
		return defer.promise;
	}

	function getUsers() {
		let defer = $q.defer();
		$http({
			method: 'GET',
			url: '/api/users'
		})
			.then(function (res) {
				console.log('success res', res);
				defer.resolve(res.data);
			})
			.catch(function (err) {
				defer.reject(err);
				console.log('error err', err);
			});
		return defer.promise;
	}

	function getAboutContent(type) {
		let defer = $q.defer();
		$http({
			method: 'GET',
			url: 'api/about?type=' + type
		})
			.then(function (res) {
				defer.resolve(res.data);
			})
			.catch(function (err) {
				defer.reject(err);
			});
		return defer.promise;
	}

	function privateMethod() {}
}

angular.module('app.common')
	.factory('apiService', apiService);

apiService.$inject = ['$q', '$http'];
