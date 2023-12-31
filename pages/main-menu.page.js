const { $ } = require("@wdio/globals");

exports.MainMenuPage = class MainMenuPage {

    constructor() {
        this.mainMenuIcon = $('id=com.eagleeye.mobileapp:id/img_menu');
        this.dashboardMenuOption = $('//*[@text="Dashboard"]');
        this.layoutsMenuOption = $('//*[@text="Layouts"]');
        this.usersMenuOption = $('//*[@text="Users"]');
    }

    async openDashboardFromMenu() {
        await this.openMainMenuSidebar();
        await this.dashboardMenuOption.touchAction('tap');
    }

    async openLayoutsFromMenu() {
        await this.openMainMenuSidebar();
        await this.layoutsMenuOption.touchAction('tap');
    }

    async openUsersFromMenu() {
        await this.openMainMenuSidebar();
        await this.usersMenuOption.touchAction('tap');
    }

    async openMainMenuSidebar() {
        await this.mainMenuIcon.touchAction('tap');
    }


}