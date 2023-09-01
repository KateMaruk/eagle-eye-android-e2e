const { $, expect } = require('@wdio/globals');

exports.NewUserPage = class NewUserPage {

    constructor() {
        this.emailField = $('//*[@text="Set email"]');
        this.firstNameField = $('//*[@text="Set first name"]');
        this.lastNameField = $('//*[@text="Set last name"]');
        this.addButton = $('id=com.eagleeye.mobileapp:id/btn_text');
        this.invalidValueWarning = $('//*[@text="Invalid value"]');
    }

    async enterUserFirstName(value) {
        await this.firstNameField.addValue(value);
    }

    async enterUserLastName(value) {
        await this.lastNameField.addValue(value);
    }

    async enterUserEmail(value) {
        await this.emailField.addValue(value);
    }

    async clickOnAddButton() {
        await this.addButton.touchAction('tap');
    }

    async isWarningExistForEmail() {
        await expect(this.invalidValueWarning).toBeDisplayed();
    }

}