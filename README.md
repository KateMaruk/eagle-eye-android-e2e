# eagle-eye-android-e2e

**Stack for automation**:
- Appium framework
- WebdriverIO (JS framework; as Appium client)
- Mocha (JS test framework)

Prerequisites:
- The _.env_ file added to the root of the project with 3 env variables:
    - `LOGIN_EMAIL` (email from your account)
    - `LOGIN_PASSWORD` (password from your account)
    - `APP_PACKAGE` (capability for Android app)
    - `APP_ACTIVITY` (capability for Android app)
- Desired capabilities for physical Android device (or emulator) should be provided into WebdriverIO configuration file. In this case file is `wdio.conf.android.js`.

Test run:
 - Run single test spec (file) - e.g. `"wdio wdio.conf.android.js --spec test/specs/users.spec.js"` 
 - Run all test specs (files) - e.g. `"wdio wdio.conf.android.js"` 

Project structure:
- `pages` - this directory uses for storing 'page' classes. Each page class contains a list of element locators and methods for interaction with them
- `test/specs` - this directory contains spec files with tests

Hooks:

Mocha hooks (`beforeEach()`, `afterEach()`) and functions (`it()`, `describe()`) are used for creating and grouping tests.