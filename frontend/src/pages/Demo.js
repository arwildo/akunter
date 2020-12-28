import db from './db.json';

const demoData = () => {
  for (let i in db) {
    console.log(db[i].time);
  }

  return db;
}

export default demoData;
