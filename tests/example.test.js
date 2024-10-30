const { Builder, By, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:2020');
        await driver.wait(until.titleIs('Hello, Docker with Node.js!'), 10000); // wait for 10 seconds
        let title = await driver.getTitle();
        console.log(title); // Should print "Hello, Docker with Node.js!"
    } finally {
        await driver.quit();
    }
})();
