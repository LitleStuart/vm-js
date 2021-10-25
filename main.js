const fs = require("fs");

const RAM = fs
  .readFileSync(process.argv[2], "utf-8")
  .toLowerCase()
  .split(/\s+/);

let IP = 0;

while (RAM[IP] !== "из_леса") {
  switch (RAM[IP]) {
    case "гриб":
      RAM[RAM[IP + 1]] = Number(RAM[IP + 2]);
      IP += 3;
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
    case "по_грибы":
      IP = Number(RAM[IP + 1]);
      IP += 2;
      break;
    case "по_грибы_если_не_отравился":
      if (RAM[RAM[IP + 1]] != 0) {
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
  // console.log(RAM);
}
