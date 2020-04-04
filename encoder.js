const encodelib = require('nodejs-base64-encode');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your string to encode? ", function (encode) {
    rl.question("Press 0 for BASE64, 1 for ROT13, 2 for HEX, 3 for BINARY")
    console.log(`Your result is, ${encodelib.encode( encode, 'base64')}`);
    rl.close();
});

rl.on("close", function () {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});