const { BasePage } = require('../../pages/base.page');
const { LoginPage } = require("../../pages/login.page");
const { MainMenuPage } = require("../../pages/main-menu.page");
const { NewUserPage } = require("../../pages/new-user.page");
const { UsersPage } = require("../../pages/users.page");
const { randomValue } = require("../../helpers/string-generator");

describe('Users', () => {

    let basePage, loginPage, mainMenuPage, usersPage, newUserPage;

    beforeEach('Launch the app', async () => {
        basePage = new BasePage();
        loginPage = new LoginPage();
        mainMenuPage = new MainMenuPage();
        usersPage = new UsersPage();
        newUserPage = new NewUserPage();

        await basePage.launchTheApp();
        await loginPage.loginIntoAppAsEndUser();
    });

    afterEach('Close the app', async () => {
        basePage = new BasePage();
        await basePage.closeTheApp();
    });

    it('Impossible to add user with invalid email address', async () => {
        await mainMenuPage.openUsersFromMenu();
        await usersPage.clickOnAddButton();
        await newUserPage.enterUserEmail(randomValue());
        await newUserPage.enterUserFirstName('Autotest ' + randomValue());
        await newUserPage.enterUserLastName('Autotest ' + randomValue());
        await newUserPage.clickOnAddButton();

        await newUserPage.isWarningExistForEmail();
    });

})