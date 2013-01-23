function create() {
  return new Dsl();
}

exports.create = create;

var Dsl = function Dsl() {
};

Dsl.prototype.baseurl = casper.cli.get('baseurl') || 'http://localhost:888';

Dsl.prototype.register = function register(registrationDetails) {
  var self = this;
  casper.then(function fillRegistrationForm() {
    casper.fill('#aspnetForm', {
      "firstName": registrationDetails.firstName,
      "lastName": registrationDetails.lastName,
      "email": registrationDetails.email,
      "password": registrationDetails.password,
      "confirmPassword": registrationDetails.confirmPassword
    }, false);
  });

  casper.then(function clickRegisterButton() {
    casper.click('a.btn-register');
  });
  
  casper.then(function waitForWebServices() {
    casper.waitForResource(self.baseurl + '/Services/AuthService.svc/json/SignUp');
    casper.waitForResource(self.baseurl + '/Services/UserInfoService.svc/json/getUserInfo');
    casper.waitForResource(self.baseurl + '/Services/TrackingService.svc/json/SaveSignUpTrackingDetails');
    casper.waitForResource(self.baseurl + '/Services/MainService.svc/json/GetNotificationsForUser');
    casper.waitForResource(self.baseurl + '/Services/QuestionAnswerService.svc/json/GetLatestQuestionsBefore');
    casper.waitForResource(self.baseurl + '/Services/MainService.svc/json/SearchReblast');
    casper.waitForResource(self.baseurl + '/Services/ListingService.svc/json/SearchListing');
  });
}
