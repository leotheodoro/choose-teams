const players = [
  {
    name: "leleo",
    level: 11,
    prime: true,
  },
  {
    name: "haro",
    level: 4,
    prime: false,
  },
  {
    name: "vino",
    level: 13,
    prime: false,
  },
  {
    name: "Kaule",
    level: 12,
    prime: false,
  },
  {
    name: "Naka",
    level: 13,
    prime: true,
  },
  {
    name: "Gomez",
    level: 7,
    prime: false,
  },
  {
    name: "Skull",
    level: 6,
    prime: false,
  },
  {
    name: "xan",
    level: 7,
    prime: true,
  },
  {
    name: "Element",
    level: 20,
    prime: false,
  },
  {
    name: "alex andre",
    level: 10,
    prime: true,
  }
]

const playersSorted = players.sort((a, b) => (a.level < b.level) ? 1 : -1);

const team1 = [];
const team2 = [];

for (i = 0; i < playersSorted.length / 2 - 1; i+=2) {
  if(Math.floor(Math.random() * 2) % 2 === 0) {
    team1.push(playersSorted[i]);
    team2.push(playersSorted[i+1]);
  } else {
    team1.push(playersSorted[i+1]);
    team2.push(playersSorted[i]);
  }
}

for (i = playersSorted.length - 1; i >= playersSorted.length / 2 + 1; i-=2) {
  if(Math.floor(Math.random() * 2) % 2 === 0) {
    team1.push(playersSorted[i]);
    team2.push(playersSorted[i-1]);
  } else {
    team1.push(playersSorted[i-1]);
    team2.push(playersSorted[i]);
  }
}

const initialValue = 0;
const sum1 = team1.reduce((accumulator, currentValue) => accumulator + currentValue.level, initialValue);
const sum2 = team2.reduce((accumulator, currentValue) => accumulator + currentValue.level, initialValue);

if (sum1 === sum2) {
  if(Math.floor(Math.random() * 10) % 2 === 0) {
    team1.push(playersSorted[playersSorted.length / 2 - 1])
    team2.push(playersSorted[playersSorted.length / 2])
  } else {
    team1.push(playersSorted[playersSorted.length / 2])
    team2.push(playersSorted[playersSorted.length / 2 - 1])
  }
} else if(sum1 - sum2) {
  team1.push(playersSorted[playersSorted.length / 2 - 1])
  team2.push(playersSorted[playersSorted.length / 2])
} else {
  team1.push(playersSorted[playersSorted.length / 2])
  team2.push(playersSorted[playersSorted.length / 2 - 1])
}

const average1 = Math.round(team1.reduce((accumulator, currentValue) => accumulator + currentValue.level, initialValue) / 5);
const average2 = Math.round(team2.reduce((accumulator, currentValue) => accumulator + currentValue.level, initialValue) / 5);










