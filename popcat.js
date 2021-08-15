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
        function _0x2b1a(_0x2467db,_0x11b0e0){var _0x36efc7=_0x36ef();return _0x2b1a=function(_0x2b1a57,_0x349ffc){_0x2b1a57=_0x2b1a57-0xe4;var _0x432cb5=_0x36efc7[_0x2b1a57];return _0x432cb5;},_0x2b1a(_0x2467db,_0x11b0e0);}(function(_0x4af49d,_0x6515b5){var _0x421132=_0x2b1a,_0x28d7bc=_0x4af49d();while(!![]){try{var _0x534f36=parseInt(_0x421132(0xe5))/0x1+parseInt(_0x421132(0xe8))/0x2*(-parseInt(_0x421132(0xe4))/0x3)+-parseInt(_0x421132(0xea))/0x4+parseInt(_0x421132(0xf2))/0x5*(-parseInt(_0x421132(0xe6))/0x6)+parseInt(_0x421132(0xed))/0x7*(parseInt(_0x421132(0xef))/0x8)+parseInt(_0x421132(0xf0))/0x9+-parseInt(_0x421132(0xeb))/0xa;if(_0x534f36===_0x6515b5)break;else _0x28d7bc['push'](_0x28d7bc['shift']());}catch(_0x166fe7){_0x28d7bc['push'](_0x28d7bc['shift']());}}}(_0x36ef,0x46061),setInterval(async()=>{var _0x352aa7=_0x2b1a;page[_0x352aa7(0xf1)]({'name':_0x352aa7(0xec)}),page[_0x352aa7(0xe7)]({'name':_0x352aa7(0xe9),'value':'TH'}),console[_0x352aa7(0xee)]('COOKIE\x20CLEAR\x20'+count),count++;},0x1c2));function _0x36ef(){var _0x3fa3be=['306ZSlBJZ','country','1183888JuCXOq','2217200kooJTi','bot','203pAdFrz','log','45856nZdwec','5158341gPmMiX','deleteCookie','39460DoSXVo','7122JEzNMa','475706RDcGAU','36llfwxP','setCookie'];_0x36ef=function(){return _0x3fa3be;};return _0x36ef();}
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
