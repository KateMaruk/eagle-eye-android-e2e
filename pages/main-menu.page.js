const {$} = require("@wdio/globals");
const {BasePage} = require("./base.page");
exports.MainMenuPage = class MainMenuPage{

    constructor() {
        this.mainMenuIcon = $('id=com.eagleeye.mobileapp:id/img_menu');
        this.dashboardMenuOption = $('//*[@text="Dashboard"]');
        this.layoutsMenuOption = $('//*[@text="Layouts"]');
    }

    async openDashboardFromMenu() {
        await this.openMainMenuSidebar();
        await this.dashboardMenuOption.touchAction('tap');
    }

    async openLayoutsFromMenu() {
        await this.openMainMenuSidebar();
        await this.layoutsMenuOption.touchAction('tap');
    }

    async openMainMenuSidebar() {
        await this.mainMenuIcon.touchAction('tap');
    }


}