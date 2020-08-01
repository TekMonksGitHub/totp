/**
 * TOTP tester. 
 * 
 * Usage: node totpTest.js [KEY] [TOKEN]
 * Where Key is the TOTP key. If Key is not supplied, then a random key is used.
 */
const fs = require("fs");
const qrcode = require("qrcode");
const totp = require("./totp.js");

main();
function main() {
    const args = process.argv.slice(2);
    if (!args[0]) console.log("Usage: node totpTest.js [Optional: KEY] [Optional: TOKEN]\n");

    const secret = totp.getSecret();
    console.log(`Secret: ${secret}`);

    const token = totp.getTOTP(args[0]||secret);
    console.log(`Token: ${token}`);

    const tokenValidates = totp.verifyTOTP(args[0]||secret, args[1]||token);
    console.log(`Validation result: ${tokenValidates}`);

    const toptURL = totp.getTOTPURL("TOTPTest", args[0]||secret);
    console.log(`TOTP URL: ${toptURL}`);
    qrcode.toDataURL(toptURL, (_, data_url) => fs.writeFileSync("qrcode.html", `<img src="${data_url}">`));
}