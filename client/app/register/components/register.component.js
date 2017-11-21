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
				<span class="highlight"></span>
				<span class="bar"></span>
				<label>Name</label>
			</div>
			<div class="form-group">
				<input type="text" ng-model="$ctrl.form.email" required>
				<span class="highlight"></span>
				<span class="bar"></span>
				<label>Email</label>
			</div>
			<div class="form-group">
				<input type="text" ng-model="$ctrl.form.years" required>
				<span class="highlight"></span>
				<span class="bar"></span>
				<label>Years Coding</label>
			</div>
			<div class="form-group">
				<input type="text" ng-model="$ctrl.form.stackside" required>
				<span class="highlight"></span>
				<span class="bar"></span>
				<label>Back End/Front End</label>
			</div>
			<div class="form-group">
				<input type="text" ng-model="$ctrl.form.github" required>
				<span class="highlight"></span>
				<span class="bar"></span>
				<label>GitHub Handle</label>
			</div>
			<div class="form-group">
				<input type="text" ng-model="$ctrl.form.linkedin" required>
				<span class="highlight"></span>
				<span class="bar"></span>
				<label>LinkedIn URL</label>
			</div>
			<div class="form-group">
				<input type="text" ng-model="$ctrl.form.team">
				<span class="highlight"></span>
				<span class="bar"></span>
				<label>Team Name</label>
			</div>
			<div class="form-group">
				<input type="text" ng-model="$ctrl.form.school" required>
				<span class="highlight"></span>
				<span class="bar"></span>
				<label>Coding School Attended</label>
			</div>
			<div class="button-row">
				<button class="btn" type="submit">Submit</button>
			</div>
		</form>
	  </div>
</div>
`
};

angular
  .module('app.register')
  .component('registerComponent', registerComponent);
