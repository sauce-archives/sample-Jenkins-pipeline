const assert = require('assert');

describe("Basic App Functionality", () => {

    it('should have correct page title', () => {
        browser.url('/index.html');

        title = browser.getTitle();

        assert.equal(title, "FizzBuzz Challenge");
    });
});