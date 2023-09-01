const { $ } = require('@wdio/globals');
const { LayoutsPage } = require("./layouts.page");

exports.LoginPage = class LoginPage {

    constructor() {
        this.emailField = $('//*[@text="E-mail"]');
        this.passwordField = $('//*[@text="Password"]');
        this.logInBtn = $('id=com.eagleeye.mobileapp:id/btn_loading');
    }

    async enterEmailIntoField(value) {
        await this.emailField.addValue(value);
    }

    async enterPasswordIntoField(value) {
        await this.passwordField.addValue(value);
    }

    async clickOnLogInBtn() {
        await this.logInBtn.touchAction('tap');
    }

    async loginIntoAppAsEndUser() {
        await this.enterEmailIntoField(process.env.LOGIN_EMAIL);
        await this.enterPasswordIntoField(process.env.LOGIN_PASSWORD);
        await this.clickOnLogInBtn();

        const layoutsPage = new LayoutsPage();
        await layoutsPage.isLayoutsPageOpened();
    }

}