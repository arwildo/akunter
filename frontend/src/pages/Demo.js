let demoData = [];

for (let i=0; i<100; i++) {
  let itemData = {}

  itemData.id = i;
  itemData.time = i + 2;

  demoData.push(itemData);
}

console.log(demoData);

export default demoData;
