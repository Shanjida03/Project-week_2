const { Builder, By, until } = require('selenium-webdriver');

async function checkoutTest() {

    let driver = await new Builder().forBrowser('chrome').build();

    try {

        // Open website
        await driver.get('https://www.saucedemo.com/');

        // Maximize browser
        await driver.manage().window().maximize();

        // Login with standard_user
        await driver.findElement(By.id('user-name'))
            .sendKeys('standard_user');

        await driver.findElement(By.id('password'))
            .sendKeys('secret_sauce');

        await driver.findElement(By.id('login-button')).click();

        console.log('Login Successful');

        // Open hamburger menu
        await driver.findElement(By.id('react-burger-menu-btn')).click();

        // Wait for menu
        await driver.sleep(2000);

        // Reset App State
        await driver.findElement(By.id('reset_sidebar_link')).click();

        console.log('App State Reset');

        // Close menu
        await driver.findElement(By.id('react-burger-cross-btn')).click();

        // Add 3 items to cart
        await driver.findElement(
            By.id('add-to-cart-sauce-labs-backpack')
        ).click();

        await driver.findElement(
            By.id('add-to-cart-sauce-labs-bike-light')
        ).click();

        await driver.findElement(
            By.id('add-to-cart-sauce-labs-bolt-t-shirt')
        ).click();

        console.log('3 Products Added');

        // Open cart
        await driver.findElement(By.className('shopping_cart_link')).click();

        // Go to checkout
        await driver.findElement(By.id('checkout')).click();

        // Fill checkout information
        await driver.findElement(By.id('first-name'))
            .sendKeys('John');

        await driver.findElement(By.id('last-name'))
            .sendKeys('Doe');

        await driver.findElement(By.id('postal-code'))
            .sendKeys('1207');

        await driver.findElement(By.id('continue')).click();

        // Verify products
        let product1 = await driver.findElement(
            By.xpath("//div[text()='Sauce Labs Backpack']")
        ).getText();

        let product2 = await driver.findElement(
            By.xpath("//div[text()='Sauce Labs Bike Light']")
        ).getText();

        let product3 = await driver.findElement(
            By.xpath("//div[text()='Sauce Labs Bolt T-Shirt']")
        ).getText();

        console.log('Products Verified:');
        console.log(product1);
        console.log(product2);
        console.log(product3);

        // Verify total price
        let totalPrice = await driver.findElement(
            By.className('summary_total_label')
        ).getText();

        console.log('Total Price:', totalPrice);

        // Finish checkout
        await driver.findElement(By.id('finish')).click();

        // Verify success message
        let successMessage = await driver.findElement(
            By.className('complete-header')
        ).getText();

        if (successMessage === 'Thank you for your order!') {

            console.log('ORDER SUCCESSFUL');
            console.log(successMessage);

        } else {

            console.log('ORDER FAILED');
        }

        // Back to products page
        await driver.findElement(By.id('back-to-products')).click();

        // Open menu again
        await driver.findElement(By.id('react-burger-menu-btn')).click();

        await driver.sleep(2000);

        // Reset App State again
        await driver.findElement(By.id('reset_sidebar_link')).click();

        console.log('App State Reset Again');

        // Logout
        await driver.findElement(By.id('logout_sidebar_link')).click();

        console.log('Logout Successful');

    } catch (error) {

        console.log('Error:', error);

    } finally {

        // Close browser
        await driver.quit();
    }
}

checkoutTest();