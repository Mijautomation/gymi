import { browser, by, element, ExpectedConditions, protractor, until } from 'protractor';

export class AppPage {

    public navigateTo() {
        return browser.get('/');
    }

    public enterInput(text: string, field: string) {
        return element(by.id(field)).element(by.tagName("input"))
            .sendKeys(text);
    }

    public clickButton(field: string) {
        return element(by.id(field))
            .click();
    }

    public seePage(page: string) {
        return element(by.id("page-" + page));
    }

    public getElement(name: string) {
        const condition = until.elementLocated(by.className(name));
        return browser.wait(condition, 5000);
    }

    public clickTab(field: string) {
        return element(by.cssContainingText(".tab-button-text", field))
            .click();
    }

    public clickPlusFab() {
        browser.sleep(500);
        return element(by.tagName("ion-fab"))
            .click();
    }

    public selectOption(selector, item) {
        let selectList, desiredOption;

        selectList = element(by.id(selector));
        selectList.click();
    }

    public clickActivitiesButton() {
        return element(by.className("item-cover"))
            .click();
    }

    clickButtonWithText(text: string) {
        return element(by.buttonText(text))
            .click();
    }
}