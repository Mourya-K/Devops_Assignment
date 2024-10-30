// tests/example.test.js
const { Builder, By, until } = require('selenium-webdriver');

async function exampleTest() {
    // Initialize the Chrome driver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to your app
        await driver.get('http://localhost:2020');

        // Check if the title is correct
        let title = await driver.getTitle();
        console.log('Title is:', title); // Log the title

        // Assertions can be added here (for example, using a testing framework)
        if (title === 'Hello, Docker with Node.js!') {
            console.log('Test passed!');
        } else {
            console.log('Test failed!');
        }
    } finally {
        // Quit the driver
        await driver.quit();
    }
}

exampleTest();