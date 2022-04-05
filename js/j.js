const fs = require("fs");
const { SHA3 } = require("sha3");

const hash = new SHA3(256);
const arr = [];

const dir = "/home/alexey/Downloads/task2";

const filenames = fs.readdirSync(dir);

filenames.forEach((file) => {
  let data = fs.readFileSync(dir + "/" + file);
  const hash = new SHA3(256);
  hash.update(data);
  const newHash = hash.digest("hex");
  arr.push(newHash);
});

arr.sort();
const str = arr.join("");
hash.update(str);
const newHash = hash.digest("hex");

console.log(newHash);
