const fs = require('fs');
const textInput = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textInput);
/*const hello = 'hello word';
console.log(hello);*/
const textOut = `this is demo : ${textInput}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written!.');
