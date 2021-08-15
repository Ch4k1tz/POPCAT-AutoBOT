const puppeteer = require('Puppeteer');
const color = require('colors');
const prompt = require('prompt-sync')();
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.setMaxListeners(Number.POSITIVE_INFINITY);
process.setMaxListeners(0);
EventEmitter.defaultMaxListeners = Infinity;
EventEmitter.prototype._maxListeners = Infinity;
let count = 0;

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
        setInterval(async () => {
            page.deleteCookie({
                name:"bot"
            });
            page.setCookie({
                'name': "country",
                'value': "TH"
            });
            console.log("COOKIE CLEAR " + count);
            count++;
            // console.log("cookie deleted");
        },450);
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
    }
})();
