//Modules
const encodelib = require('nodejs-base64-encode');
const rot13x = require('codenewbie-rot13');
const binaryx = require('decode-encode-binary');
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your string (1~10 chars) to encode? ", function (encode) {
    if (encode.length <= 10) {
        rl.question("Press 0 for BASE64, 1 for ROT13, 2 for HEX, 3 for BINARY ", function (enc_type) {

            switch (enc_type) {

                case '0':
                    console.log(`Your result is, ${encodelib.encode(encode, 'base64')}`);
                    console.log(`Encode type selected: BASE64`);
                    break;

                case '1':
                    console.log(`Your result is, ${rot13x(encode)}`);
                    console.log(`Encode type selected: ROT13`);
                    break;

                case '2':
                    console.log(`Your result is, ${encodelib.encode(encode, 'hex')}`);
                    console.log(`Encode type selected: HEX`);
                    break;

                case '3':
                    console.log(`Your result is, ${binaryx.encode(encode)}`);
                    console.log(`Encode type selected: BINARY`);
                    break;

                default:
                    console.log("Wrong parameter.");
            }

            rl.close();
        });
    } else {
        console.log("String too long, try again!")
        rl.close();
    }

});

rl.on("close", function () {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});