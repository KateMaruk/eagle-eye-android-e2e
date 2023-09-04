const { $ } = require('@wdio/globals');
const { BasePage } = require("./base.page");

exports.NewLayoutPage = class NewLayoutPage extends BasePage {

    constructor() {
        super();
        this.nameField = $('id=com.eagleeye.mobileapp:id/value');
        this.nameStaticField = $('id=com.eagleeye.mobileapp:id/value_static');
        this.cameraAspectRatioOption = $('id=com.eagleeye.mobileapp:id/row_aspect_ratio');
        this.maxCamerasPerRowOption = $('id=com.eagleeye.mobileapp:id/row_max_cameras');
        this.showCamerasTitleBarToggle = $('id=com.eagleeye.mobileapp:id/item_switch');
        this.addButton = $('id=com.eagleeye.mobileapp:id/btn_text');
    }

    async enterLayoutName(value) {
        await this.nameStaticField.touchAction('tap');
        await this.nameField.clearValue();
        await this.nameField.addValue(value);
        await this.clickOnDoneOnKeyboard();
    }

    async clickOnCameraAspectRatio() {
        await this.cameraAspectRatioOption.touchAction('tap');
    }

    async clickOnMaxCamerasPerRow() {
        await this.maxCamerasPerRowOption.touchAction('tap');
    }

    async isShowCamerasTitleBarOn() {
        let checkedAttrValue = this.showCamerasTitleBarToggle.getAttribute('checked');
        return checkedAttrValue === true;
    }

    async clickOnShowCamerasTitleBar() {
        await this.showCamerasTitleBarToggle.touchAction('tap');
    }

    async setShowCamerasTitleBarStatus(status) {
        let condition =
            (status && !await this.isShowCamerasTitleBarOn()) || (!status && await this.isShowCamerasTitleBarOn());
        if (condition) {
            await this.clickOnShowCamerasTitleBar();
        }
    }

    async setCameraAspectRatio(value) {
        await this.clickOnCameraAspectRatio();

        let ratioSelector = await $('//*[@text="' + value + '"]');
        await ratioSelector.touchAction('tap');
    }

    async setMaxCamerasPerRow(value) {
        await this.clickOnMaxCamerasPerRow();

        let ratioSelector = await $('//*[@text="' + value + '"]');
        await ratioSelector.touchAction('tap');
    }

    async clickOnAddButton() {
        await this.addButton.touchAction('tap');
    }

}