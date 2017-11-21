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
    <h1>Register</h1>
	<form name="registerForm" ng-submit="$ctrl.formSubmit()">
		<div class="form-group">
			<label>Name</label>
			<input type="text" ng-model="$ctrl.form.name" required>
		</div>
		<div class="form-group">
			<label>Email</label>
			<input type="text" ng-model="$ctrl.form.email" required>
		</div>
		<div class="form-group">
			<label>Years Coding</label>
			<input type="text" ng-model="$ctrl.form.years" required>
		</div>
		<div class="form-group">
			<label>Back End/Front End</label>
			<input type="text" ng-model="$ctrl.form.stackside" required>
		</div>
		<div class="form-group">
			<label>GitHub Handle</label>
			<input type="text" ng-model="$ctrl.form.github" required>
		</div>
		<div class="form-group">
			<label>LinkedIn URL</label>
			<input type="text" ng-model="$ctrl.form.linkedin" required>
		</div>
		<div class="form-group">
			<label>Team Name</label>
			<input type="text" ng-model="$ctrl.form.team">
		</div>
		<div class="form-group">
			<label>Coding School Attended</label>
			<input type="text" ng-model="$ctrl.form.school" required>
		</div>
		<div class="button-row">
  			<button type="submit">Submit</button>
		</div>
    </form>
</div>
`
};

angular
  .module("app.register")
  .component("registerComponent", registerComponent);
