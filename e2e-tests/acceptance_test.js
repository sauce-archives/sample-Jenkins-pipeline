const assert = require('assert');

describe("Basic App Functionality", () => {

    it('should show fizz', () => {
        browser.get('/index.html');

        title = browser.getTitle();

        assert.equal(title, "React App");
    });
});