Q1
SauceDemo UI Automation Test
This project automates the login test for the SauceDemo website using Selenium WebDriver with JavaScript.
Objective: Verify that the `locked_out_user` cannot log in and the correct error message is displayed.
 Technologies Used:
 JavaScript
 Node.js
 Selenium WebDriver
 ChromeDriver
 VS Code
 open the file LoginTest.js on VS code run the terminal node LoginTest.js
 Expected Result:
 Epic sadface: Sorry, this user has been locked out.
 Test Status:
 TEST PASSED
 Error Message Verified Successfully


 Q2
 SauceDemo Checkout Automation Test
 This project automates the SauceDemo checkout process using Selenium WebDriver with JavaScript.

 Scenario

Login with standard_user
Reset App State
Add 3 products
Checkout products
Verify product names and total price
Finish order
Verify success message
Reset App State again
Logout

Run Test
node CheckoutTest.js
Expected Result
Order should complete successfully with message
Thank you for your order!


