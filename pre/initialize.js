casper.start();

casper.then(function () {
  casper.echo('starting a test');
});

casper.run(function initialize() {
  casper.options.pageSettings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.57 Safari/536.11';
  var dsl = require('../modules/dsl.js').create();
  casper.dsl = dsl;
  casper.test.done();
});