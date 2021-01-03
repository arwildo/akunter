const numArr = [1, 2, 3, 4, 5, 6];
let last30Days;
let dates = []
let demoData = [];
let dateNow = new Date(Date.now() + (3600 * 1000 * 24 * 2));

// Repeat array
const arrMult = (arr, n) => {
  var a = [];
  for (var i=0;i<n;[i++].push.apply(a,arr));
  return a;
}

let timeArr = ["15:13", "15:45", "16:24", "17:41", "18:9", "20:18", "21:56"];
timeArr = arrMult(timeArr, 15);


// Get all the last15days's days
for (let day=15; day>1; day--) {
  last30Days = new Date(dateNow - day * 24 * 60 * 60 * 1000).toISOString();
  let clean = last30Days.split(":")[0];
  clean = clean.split("T")[0];
  clean = clean.split("-").reverse();
  clean = clean.join("-");
  dates.push(clean);
}

// Main
for (let i=0; i<93; i++) {
  let itemData = {}

  itemData.id = i;
  itemData.item = numArr[Math.floor(Math.random() * numArr.length)];
  itemData.time = dates[i] + " " + timeArr[i]
  itemData.quantity = numArr[Math.floor(Math.random() * numArr.length)]; 

  demoData.push(itemData);
}

export default demoData;
