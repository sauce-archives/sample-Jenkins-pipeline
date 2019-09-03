const assert = require('assert');

describe('Temperature converter', () => {
    it('should have the correct title', () => {
        browser.url('/');
        
        const actualTitle = $(".App-title").getText();
        const expectedTitle = "Welcome to Celcius to Farhenheit Calculator!"

        assert.equal(actualTitle, expectedTitle);
    });

    it('should have the logo', () => {
        browser.url('/');

        assert.equal($(".App-logo").isDisplayed(), true);
    });
});