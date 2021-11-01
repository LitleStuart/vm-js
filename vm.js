const fs = require("fs");

// you need enter `npm install prompt-sync` on your cmd
const prompt = require("prompt-sync")({ sigint: true });

let RAM;

try {
  RAM = fs.readFileSync(process.argv[2], "utf-8").toLowerCase().split(/\s+/);
} catch {
  console.log(`Incorrect arguments. Try 'node vm.js [PROGRAM FILE]'`);
  return;
}
let IP = 0;

while (RAM[IP] !== "из_леса") {
  switch (RAM[IP]) {
    case "гриб":
      RAM[RAM[IP + 1]] = Number(RAM[IP + 2]);
      IP += 3;
      break;
    case "переложить":
      RAM[RAM[IP + 1]] = RAM[RAM[IP + 2]];
      IP += 3;
      break;
    case "спросить":
      const dig = prompt("Введите число -> ");
      RAM[RAM[IP + 1]] = Number(dig);
      IP += 2;
      break;
    case "смешать":
      RAM[RAM[IP + 3]] = RAM[RAM[IP + 1]] + RAM[RAM[IP + 2]];
      IP += 4;
      break;
    case "выкинуть":
      RAM[RAM[IP + 3]] = RAM[RAM[IP + 1]] - RAM[RAM[IP + 2]];
      IP += 4;
      break;
    case "преумножить":
      RAM[RAM[IP + 3]] = RAM[RAM[IP + 1]] * RAM[RAM[IP + 2]];
      IP += 4;
      break;
    case "раздать_родне":
      RAM[RAM[IP + 3]] = RAM[RAM[IP + 1]] / RAM[RAM[IP + 2]];
      IP += 4;
      break;
    case "какой_больше":
      RAM[RAM[IP + 3]] = Math.max(RAM[RAM[IP + 1]], RAM[RAM[IP + 2]]);
      IP += 4;
      break;
    case "какой_меньше":
      RAM[RAM[IP + 3]] = Math.min(RAM[RAM[IP + 1]], RAM[RAM[IP + 2]]);
      IP += 4;
      break;
    case "по_грибы":
      IP = Number(RAM[IP + 1]);
      IP += 2;
      break;
    case "по_грибы_если_не_отравился":
      if (RAM[RAM[IP + 1]] > 0) {
        IP = Number(RAM[IP + 2]);
        break;
      }
      IP += 3;
      break;
    case "хвалиться":
      console.log(RAM[RAM[IP + 1]]);
      IP += 2;
      break;

    default:
      return;
  }
}
