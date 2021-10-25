const fs = require("fs");

const RAM = fs
  .readFileSync(process.argv[2], "utf-8")
  .toLowerCase()
  .split(/\s+/);

for (let IP = 0; IP < RAM.length; IP++) {
  switch (RAM[IP]) {
    case "собрать":
      RAM[RAM[IP + 1]] = Number(RAM[IP + 2]);
      break;
    case "смешать":
      RAM[RAM[IP + 3]] = RAM[RAM[IP + 1]] + RAM[RAM[IP + 2]];
      break;
    case "подать":
      console.log(RAM[RAM[IP + 1]]);
      break;

    default:
      break;
  }
}
console.log(RAM);
