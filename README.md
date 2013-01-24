complexdemo
===========

A more complex demo for the Vancouver Test Automation Group

This is meant to be reviewed in tandem with https://github.com/julienescueta/simpledemo.

In this repo, we take simpledemo and improve upon its maintainability and readability by using some features in CasperJS:

1. Custom command-line arguments
 * http://casperjs.org/cli.html
2. Modules + domain specific language
 * http://en.wikipedia.org/wiki/Domain-specific_language
3. Pre-test CLI argument

# Execution
In Windows, you can run the demo by navigating to `/casperjs/batchbin` in commmand-line and running:

`casperjs.bat --pre=../../pre/initialize.js --baseurl=http://test.resaas.com:888 test ../../tests/demo2.js`

# Important 

In demo.js, you will want to change the parameters that are passed into the casper.dsl.register to a unique e-mail address otherwise the test will fail:

```
casper.dsl.register({
    "firstName": "Luigi",
    "lastName": "Mario",
    "email": "SuperMario@meetup.com",  // change this to be unique!
    "password": "meetup",
    "confirmPassword": "meetup"
});
```
