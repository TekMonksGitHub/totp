/**
 * TOTP tester. 
 * 
 * Usage: node totpTest.js [KEY] 
 * Where Key is the TOTP key. If Key is not supplied, then a random key is used.
 */
const totp = require("./totp.js");
const qrcode = require("qrcode");
const fs = require("fs");

main();


function main() {
    const secret = totp.getSecret();
    console.log(secret);

    const args = process.argv.slice(2);
    const token = totp.getTOTP(args[0]||secret);
    console.log(token);

    const tokenValidates = totp.verifyTOTP(args[0]||secret, token);
    console.log(tokenValidates);

    const toptURL = totp.getTOTPURL("Teleworkr", args[0]||secret);
    console.log(toptURL);
    qrcode.toDataURL(toptURL, function(_, data_url) {
        console.log(data_url);
        fs.writeFileSync("qrcode.html", `<img src="${data_url}">`);
    });
}