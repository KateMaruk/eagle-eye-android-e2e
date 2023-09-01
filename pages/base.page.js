const { driver } = require('@wdio/globals');

exports.BasePage = class BasePage {

    async launchTheApp() {
        if (await driver.isAppInstalled(process.env.APP_PACKAGE)) {
            await driver.launchApp();
        }
    }

    async closeTheApp() {
        await driver.closeApp();
    }

    async clickOnDoneOnKeyboard() {
        if (driver.isAndroid) {
            await driver.execute('mobile: performEditorAction', { 'action': 'Done' });
        }
    }

}