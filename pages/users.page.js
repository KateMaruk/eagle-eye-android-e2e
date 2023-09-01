const { $ } = require('@wdio/globals');

exports.UsersPage = class UsersPage {

    constructor() {
        this.addButton = $('id=com.eagleeye.mobileapp:id/img_custom');
    }

    async clickOnAddButton() {
        await this.addButton.touchAction('tap');
    }

}