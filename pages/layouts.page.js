const { $, expect } = require('@wdio/globals');
const {BasePage} = require("./base.page");

exports.LayoutsPage = class LayoutsPage extends BasePage {

    constructor() {
        super();
        this.layoutsPageTitle = $('//*[@text="Layouts"]');
        this.threeDotsMenuIcon = $('id=com.eagleeye.mobileapp:id/img_more');
        this.newLayoutOption = $('//*[@text="New Layout"]');
    }

    async isLayoutsPageOpened() {
        await expect(this.layoutsPageTitle).toBeDisplayed();
    }

    async clickOnMenuIconRightCorner() {
        await this.threeDotsMenuIcon.touchAction('tap');
    }

    async clickOnNewLayoutOption() {
        await this.newLayoutOption.touchAction('tap');
    }

    async isAddedLayoutExist(name) {
        let layoutPillBox = await $('//android.widget.RadioButton[@text="' + name + '"]');
        await expect(layoutPillBox).toBeDisplayed();
    }

}