const { Builder, By, until } = require('selenium-webdriver');

async function loginTest() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {

        await driver.get('https://www.saucedemo.com/');

        await driver.manage().window().maximize();

        await driver.findElement(By.id('user-name'))
            .sendKeys('locked_out_user');

        await driver.findElement(By.id('password'))
            .sendKeys('secret_sauce');

        await driver.findElement(By.id('login-button')).click();

        let errorElement = await driver.wait(
            until.elementLocated(By.css('[data-test="error"]')),
            5000
        );

        let actualMessage = await errorElement.getText();

        let expectedMessage =
            'Epic sadface: Sorry, this user has been locked out.';

        if (actualMessage === expectedMessage) {

            console.log('TEST PASSED');
            console.log('Error Message Verified Successfully');

        } else {

            console.log('TEST FAILED');
        }

    } catch (error) {

        console.log(error);

    } finally {

        await driver.quit();
    }
}

loginTest();