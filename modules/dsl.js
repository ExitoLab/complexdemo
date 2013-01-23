function create() {
  return new Dsl();
}

exports.create = create;

var Dsl = function Dsl() {
};

Dsl.prototype.baseurl = casper.cli.get('baseurl') || 'http://localhost:888';

Dsl.prototype.register = function register(registrationDetails) {
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
    casper.waitForResource('http://localhost:888/Services/AuthService.svc/json/SignUp');
    casper.waitForResource('http://localhost:888/Services/UserInfoService.svc/json/getUserInfo');
    casper.waitForResource('http://localhost:888/Services/TrackingService.svc/json/SaveSignUpTrackingDetails');
    casper.waitForResource('http://localhost:888/Services/MainService.svc/json/GetNotificationsForUser');
    casper.waitForResource('http://localhost:888/Services/QuestionAnswerService.svc/json/GetLatestQuestionsBefore');
    casper.waitForResource('http://localhost:888/Services/MainService.svc/json/SearchReblast');
    casper.waitForResource('http://localhost:888/Services/ListingService.svc/json/SearchListing');
  });
}
