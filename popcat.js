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
            //Code From Noxturnix
            document.dispatchEvent(new KeyboardEvent('keydown', {'key':'a'}));
            document.dispatchEvent(new KeyboardEvent('keyup', {'key':'a'}));
            document.getElementById('app').__vue__.accumulator = 800;

            setInterval(() => {
                document.dispatchEvent(new KeyboardEvent('keydown', {'key':'a'}));
                document.dispatchEvent(new KeyboardEvent('keyup', {'key':'a'}));
                document.getElementById('app').__vue__.bot = !1;
                document.getElementById('app').__vue__.sequential_max_pops = 0;
                document.getElementById('app').__vue__.accumulator = 800;
            }, 15 * 1000);
        });
    }
})();
