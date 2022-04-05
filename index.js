const fs = require("fs");
const { SHA3 } = require("sha3");

const hash = new SHA3(256);
const arr = [];

const filenames = fs.readdirSync(`${__dirname}/files`);

filenames.forEach((file) => {
  try {
    const data = fs.readFileSync(`./files/${file}`);
    const hash = new SHA3(256);
    hash.update(data);
    let newHash = hash.digest("hex");
    arr.push(newHash);
  } catch (e) {
    console.log("Error:", e.stack);
  }
});

const str = arr.sort().join("") + "voytko1994@gmail.com";

hash.update(str);

const genHash = hash.digest("hex");

console.log(genHash);
