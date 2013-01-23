/** 
 Use case: Guest user visits the site and registers
 
 1- visit the home page
 2- click on the register button
 3- fill out the registration form
 4- click the register button
 5- assert that the user's name shows up on their profile
 
 */

casper.start();

casper.then(function openHome() {
  casper.open(casper.dsl.baseurl); // hardcoded --> CLI variable
});

casper.then(function clickOnRegisterButton() {
  casper.click('.component-user-registration a.btn-resaas');
});

casper.then(function assertRegistrationPage() {
  casper.test.assertEquals(casper.getCurrentUrl(), casper.dsl.baseurl + '/signup', 'Verify that clicking on the register button takes us to /signup');
});

casper.then(function registerGuest() {
  casper.dsl.register({
    "firstName": "Omnomnom",
    "lastName": "Yeahbuddy",
    "email": "OmnomnomYeahbuddy@meetup.com",
    "password": "meetup",
    "confirmPassword": "meetup"
  }); // using the DSL module
});

var name;
casper.then(function getName() {
  name = casper.evaluate(function getNameFromDom() {
    return jQuery('div.user-name-bar').text().trim();
  });
});

casper.then(function assertProfilePage() {
  casper.test.assertEquals(name, 'Omnomnom Yeahbuddy');
});

casper.run(function runTest() {
  casper.test.done();
});