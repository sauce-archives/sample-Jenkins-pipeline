const assert = require('assert');

describe('Temperature converter', () => {
    it('should have the correct title', () => {
        browser.url('/');
        
        const actualTitle = browser.getText(".App-title");
        const expectedTitle = "Welcome to Celcius to Farhenheit Calculator!"

        assert.equal(actualTitle, expectedTitle);
    });

    it('should have the logo', () => {
        browser.url('/');

        assert.equal(browser.isVisible(".App-logo"), true);
    });

    it('should show the correct initial conversion message', () => {
        browser.url('/');

        const actualMessage = browser.getText('.temperatureMesssage');
        const expectedMessage = "Watiting for input...";

        assert.equal(actualMessage, expectedMessage);
    });

    it('should show the correct conversion message after conversion', () => {
        browser.url('/');

        browser.setValue('.scale-type-c', 0);

        const actualMessage = browser.getText('.temperatureMesssage');

        assert.equal(actualMessage.includes("0 Celsius is 32 Farhenheit"), true);
    });
});