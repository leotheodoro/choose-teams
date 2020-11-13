const players = [
  {
    name: "leleo",
    level: 12,
  },
  {
    name: "haro",
    level: 20,
  },
  {
    name: "vino",
    level: 15
  },
  {
    name: "Kaule",
    level: 12,
  },
  {
    name: "Naka",
    level: 13
  },
  {
    name: "Gomez",
    level: 7
  },
  {
    name: "Skull",
    level: 6
  },
  {
    name: "xan",
    level: 6
  },
  {
    name: "Element",
    level: 20
  },
  {
    name: "alex andre",
    level: 16
  }
]

const playersSorted = players.sort((a, b) => (a.level < b.level) ? 1 : -1);

const team1 = [];
const team2 = [];

for (i = 0; i < playersSorted.length / 2 - 1; i++) {
  if (i % 2 == 0) {
    team1.push(playersSorted[i])
  } else {
    team2.push(playersSorted[i])
  }
}


for (i = playersSorted.length - 1; i >= playersSorted.length / 2 + 1; i--) {
  if (i % 2 == 0) {
    team2.push(playersSorted[i])
  } else {
    team1.push(playersSorted[i])
  }
}

const initialValue = 0;
const sum1 = team1.reduce((accumulator, currentValue) => accumulator + currentValue.level, initialValue);
const sum2 = team2.reduce((accumulator, currentValue) => accumulator + currentValue.level, initialValue);


if (sum1 - sum2) {
  team1.push(playersSorted[playersSorted.length / 2 - 1])
  team2.push(playersSorted[playersSorted.length / 2])
} else {
  team1.push(playersSorted[playersSorted.length / 2])
  team2.push(playersSorted[playersSorted.length / 2 - 1])
}

const average1 = Math.round(team1.reduce((accumulator, currentValue) => accumulator + currentValue.level, initialValue) / 5);
const average2 = Math.round(team2.reduce((accumulator, currentValue) => accumulator + currentValue.level, initialValue) / 5);

console.log(team1);
console.log(average1);
console.log(team2);
console.log(average2);








