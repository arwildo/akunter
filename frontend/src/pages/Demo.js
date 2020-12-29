import db from './db.json';

let last30Days;
let dates = []
let dateNow = new Date(Date.now() + (3600 * 1000 * 24 * 2));

// Get today last 30 days date
const get30DaysDate = () => {
  for (let day=31; day>1; day--) {
    last30Days = new Date(dateNow - day * 24 * 60 * 60 * 1000).toISOString();
    let clean = last30Days.split(":")[0];
    clean = clean.split("T")[0];
    clean = clean.split("-").reverse();
    clean = clean.join("-");
    dates.push(clean);
  }
}
get30DaysDate();


const demoData = () => {
  for (let i in dates) {
    console.log("one " + db[i].time.split(' ')[0] + " and two " + dates[i]);
    db[i].time.split(' ')[0] = dates[i]
  }

  return db;
}

export default demoData;
