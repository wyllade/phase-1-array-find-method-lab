function superbowlWin(record) {
  const win = record.find(game => game.result === "W");
  return win ? win.year : undefined;
}

const record = [
  { year: "2012", result: "L" },
  { year: "2013", result: "L" },
  { year: "2014", result: "L" },
  { year: "2015", result: "W" },
  { year: "2016", result: "L" }
];

console.log(superbowlWin(record));
