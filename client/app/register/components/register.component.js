const registerComponent = {
  bindings: {},
  controller: /*@ngInject*/ function(apiService) {
	let ctrl = this;
	ctrl.form = {};

    ctrl.formSubmit = formSubmit;

    ctrl.$onInit = function() {};
    ctrl.$postLink = function() {};
    ctrl.$onChange = function() {};
    ctrl.$onDestroy = function() {};

    function formSubmit() {
	  console.log('formSubmit', ctrl.form);
	  apiService.sendRegistration(ctrl.form)
		.then(function(res){
			console.log('formSubmit res', res);
		})
		.catch(function(err){
			console.log('formSubmit err', err);
		});
    }

    // function privateMethod() {}
  },
  template: `
  <div class="events-container">
	  <div class="title-container">
	  	<h1>Register</h1>
	  </div>
	  <div class="form-container">
		<form name="registerForm" ng-submit="$ctrl.formSubmit()">
			<div class="form-group">
				<input type="text" ng-model="$ctrl.form.name" required>
				<label class="control-label">Name</label><i class="bar"></i>
			</div>
			<div class="form-group">
				<input type="text" ng-model="$ctrl.form.email" required>
				<label class="control-label">Email</label><i class="bar"></i>
			</div>
			<div class="form-group">
				<input type="text" ng-model="$ctrl.form.years" required>
				<label class="control-label">Years Coding</label><i class="bar"></i>
			</div>
			<div class="form-group">
				<input type="text" ng-model="$ctrl.form.stackside" required>
				<label class="control-label">Back End/Front End</label><i class="bar"></i>
			</div>
			<div class="form-group">
				<input type="text" ng-model="$ctrl.form.github" required>
				<label class="control-label">GitHub Handle</label><i class="bar"></i>
			</div>
			<div class="form-group">
				<input type="text" ng-model="$ctrl.form.linkedin" required>
				<label class="control-label">LinkedIn URL</label><i class="bar"></i>
			</div>
			<div class="form-group">
				<input type="text" ng-model="$ctrl.form.team">
				<label class="control-label">Team Name</label><i class="bar"></i>
			</div>
			<div class="form-group">
				<input type="text" ng-model="$ctrl.form.school" required>
				<label class="control-label">Coding School Attended</label><i class="bar"></i>
			</div>
			<div class="button-row">
				<button class="button" type="submit">Submit</button>
			</div>
		</form>
	  </div>
</div>
`
};

angular
  .module('app.register')
  .component('registerComponent', registerComponent);
