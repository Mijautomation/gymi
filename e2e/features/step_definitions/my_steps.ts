import { After, defineSupportCode } from 'cucumber';
import { expect } from 'chai';
import { AppPage } from './app.po';
import { browser } from 'protractor';

defineSupportCode(({Given, When, Then, Before}) => {
    let app: AppPage;

    Before(() => {
        app = new AppPage();
    });

    After(() => {
        // browser.executeScript('window.sessionStorage.clear();');
        // browser.executeScript('window.localStorage.clear();');
    });

    Given('I am on the login page',
        () => {
            app.navigateTo();
        });

    Given('I go to the login page',
        () => {
            app.navigateTo();
            app.clickButton("go-to-login");
        });

    Given('I am logged in as user {string} with password {string}',
        (username: string, password: string) => {
            app.navigateTo();
            app.clickButton("go-to-login");
            app.enterInput(username, "username");
            app.enterInput(password, "password");
            app.clickButton("login");
        });

    When('I type {string} into the {string} field',
        (input: string, field: string) => app.enterInput(input, field));

    When("I click the {string} button",
        (field: string) => app.clickButton(field));

    When("I click the {string} tab",
        (field: string) => app.clickTab(field));

    When("I click the plus fab",
        () => app.clickPlusFab());

    Then("I am on the {string} page",
        (page: string) => {
            app.seePage(page)
        });

    Then("I see an error notification",
        () => {
            app.getElement("toast-message")
                .then(elem => expect(elem.isDisplayed()).to.be.true);
        });

});
