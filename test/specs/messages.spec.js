const assert = require("assert");

describe('App Messages', () => {

        it('should show the correct initial conversion message', () => {
        browser.url('/');

        const actualMessage = $('.temperatureMesssage').getText();
        const expectedMessage = "Watiting for input...";

        assert.equal(actualMessage, expectedMessage);
    });

    it('should show the correct conversion message after conversion', () => {
        browser.url('/');

        $('.scale-type-c').setValue("0");

        const actualMessage = $('.temperatureMesssage').getText();

        assert.equal(actualMessage.includes("0 Celsius is 32 Farhenheit"), true);
    });
});