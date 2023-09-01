const { BasePage } = require('../../pages/base.page');
const { LoginPage } = require("../../pages/login.page");
const { LayoutsPage } = require("../../pages/layouts.page");
const { NewLayoutPage } = require("../../pages/new-layout.page");
const { randomValue } = require("../../helpers/string-generator");
const { MainMenuPage } = require("../../pages/main-menu.page");

describe('Layouts', () => {

    let basePage, loginPage, layoutsPage, newLayoutPage, mainMenuPage;

    beforeEach('Launch the app', async () => {
        basePage = new BasePage();
        loginPage = new LoginPage();
        layoutsPage = new LayoutsPage();
        newLayoutPage = new NewLayoutPage();
        mainMenuPage = new MainMenuPage();

        await basePage.launchTheApp();
        await loginPage.loginIntoAppAsEndUser();

    });

    afterEach('Close the app', async () => {
        basePage = new BasePage();
        await basePage.closeTheApp();
    })

    it('Create new layout', async () => {
        let layout = {
            name: 'Autotest ' + randomValue(),
            cameraAspectRatio: '4:3',
            maxCamerasPerRow: '6',
            showCamerasTitleBar: false
        }
        await layoutsPage.clickOnMenuIconRightCorner();
        await layoutsPage.clickOnNewLayoutOption();
        await newLayoutPage.enterLayoutName(layout.name);
        await newLayoutPage.setCameraAspectRatio(layout.cameraAspectRatio);
        await newLayoutPage.setMaxCamerasPerRow(layout.maxCamerasPerRow);
        await newLayoutPage.setShowCamerasTitleBarStatus(layout.showCamerasTitleBar);
        await newLayoutPage.clickOnAddButton();

        await layoutsPage.isLayoutsPageOpened();
        await mainMenuPage.openDashboardFromMenu();
        await mainMenuPage.openLayoutsFromMenu();

        await layoutsPage.isAddedLayoutExist(layout.name);
    })

})