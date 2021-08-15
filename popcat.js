const puppeteer = require('Puppeteer');
const color = require('colors');
const prompt = require('prompt-sync')();

console.log(color.rainbow(`
╔═╗╔═╗╔═╗╔═╗╔═╗╔╦╗  ╔╗ ╔═╗╔╦╗
╠═╝║ ║╠═╝║  ╠═╣ ║   ╠╩╗║ ║ ║ 
╩  ╚═╝╩  ╚═╝╩ ╩ ╩   ╚═╝╚═╝ ╩
Made By WeAreRainBowHAT (Thailand Number 01 ><)
`));
const threads = prompt(color.green("Enter Threads: "));

(async () => {
    for (let i = 0; i < threads; i++){
        console.log("threads: " + i + " started");
        const browser = await puppeteer.launch({
            args: [
                "--mute-audio"
            ],
            headless: true
        });
        const page = await browser.newPage();
        await page.goto('https://popcat.click/');
        await page.evaluate(() => {
            var event = new KeyboardEvent('keydown', {
                key: 'n',
                ctrlKey: true
            });
            // for (i = 0; i < 1000; i++) {
            //     document.dispatchEvent(event);
            // }
            setInterval(() => {
                for (i = 0; i < 2000; i++) {
                    document.dispatchEvent(event);
                }
            });
        });
        setInterval(async () => {
            page.deleteCookie({
                name:"bot"
            });
            console.log("cookie deleted");
        },450);
    }
})();