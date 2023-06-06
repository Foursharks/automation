const {Builder, Browser, By, until, Key} = require('selenium-webdriver'); 

let driver; 

beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build()
})

afterEach(async () => {
    await driver.quit()
})

describe("testing the movies app", ()=> {
    // test("can add a movie", async() => {
    //     await driver.get('http://localhost:3000')
    //     await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('Casablanca')
    //     await driver.findElement(By.css('button[type="submit"]')).click(); 

    //     const addedMovie = await driver.wait(until.elementLocated(By.css('#movies-list li label')), 1000);

    //     expect(await addedMovie.getText()).toBe('Casablanca');
    // })
    // test("can delete a movie", async() => {
    //     await driver.get('http://localhost:3000')
    //     await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('Shawshank Redemption')
    //     await driver.findElement(By.css('button[type="submit"]')).click(); 
    //     await driver.findElement(By.xpath("//label[text()='Shawshank Redemption']/following-sibling::button")).click(); 
    //     const deletedMovie = await driver.wait(until.elementLocated(By.css('#message')), 1000);
    //     expect(await deletedMovie.getText()).toBe('Shawshank Redemption deleted!');
    // })

    test("checks if the checkbox works", async() => {
        await driver.get('http://localhost:3000')
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('Encanto')
        await driver.findElement(By.css('button[type="submit"]')).click(); 
        await driver.findElement(By.xpath("//label[text()='Encanto']/preceding-sibling::input")).click(); 
        const watchedMovie = await driver.wait(until.elementLocated(By.css('#message')), 1000);
        expect(await watchedMovie.getText()).toBe('Watched Encanto');
    })
})