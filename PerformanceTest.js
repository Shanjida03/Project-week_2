const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { expect } = require('chai');

require('chromedriver');

describe('SauceDemo UI Automation', function () {

    this.timeout(60000);

    let driver;

    before(async () => {
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(new chrome.Options())
            .build();
    });

    after(async () => {
        await driver.quit();
    });

    it('Complete Checkout Flow', async () => {

        // Open Website
        await driver.get('https://www.saucedemo.com/');

        // Login
        await driver.findElement(By.id('user-name'))
            .sendKeys('performance_glitch_user');

        await driver.findElement(By.id('password'))
            .sendKeys('secret_sauce');

        await driver.findElement(By.id('login-button')).click();

        // Wait for inventory page
        await driver.wait(
            until.elementLocated(By.className('inventory_list')),
            10000
        );

        // Open menu
        await driver.findElement(By.id('react-burger-menu-btn')).click();

        // Reset App State
        await driver.wait(
            until.elementLocated(By.id('reset_sidebar_link')),
            5000
        );

        await driver.findElement(By.id('reset_sidebar_link')).click();

        // Close menu
        await driver.findElement(By.id('react-burger-cross-btn')).click();

        // Sort Z to A
        const dropdown = await driver.findElement(
            By.className('product_sort_container')
        );

        await dropdown.sendKeys('Name (Z to A)');

        // Get first product
        const firstProduct = await driver.findElement(
            By.className('inventory_item_name')
        );

        const productName = await firstProduct.getText();

        console.log('Selected Product:', productName);

        // Add first product to cart
        const addButtons = await driver.findElements(
            By.css('.btn_inventory')
        );

        await addButtons[0].click();

        // Open cart
        await driver.findElement(
            By.className('shopping_cart_link')
        ).click();

        // Verify product in cart
        const cartProduct = await driver.findElement(
            By.className('inventory_item_name')
        ).getText();

        expect(cartProduct).to.equal(productName);

        // Checkout
        await driver.findElement(By.id('checkout')).click();

        // Fill form
        await driver.findElement(By.id('first-name'))
            .sendKeys('John');

        await driver.findElement(By.id('last-name'))
            .sendKeys('Doe');

        await driver.findElement(By.id('postal-code'))
            .sendKeys('12345');

        await driver.findElement(By.id('continue')).click();

        // Verify product name
        const checkoutProduct = await driver.findElement(
            By.className('inventory_item_name')
        ).getText();

        expect(checkoutProduct).to.equal(productName);

        // Verify total price
        const totalPrice = await driver.findElement(
            By.className('summary_total_label')
        ).getText();

        console.log('Total Price:', totalPrice);

        expect(totalPrice).to.include('Total');

        // Finish order
        await driver.findElement(By.id('finish')).click();

        // Verify success message
        const successMessage = await driver.findElement(
            By.className('complete-header')
        ).getText();

        console.log(successMessage);

        expect(successMessage).to.equal(
            'Thank you for your order!'
        );

        // Reset App State again
        await driver.findElement(By.id('react-burger-menu-btn')).click();

        await driver.wait(
            until.elementLocated(By.id('reset_sidebar_link')),
            5000
        );

        await driver.findElement(By.id('reset_sidebar_link')).click();

        // Logout
        await driver.findElement(By.id('logout_sidebar_link')).click();

    });

});