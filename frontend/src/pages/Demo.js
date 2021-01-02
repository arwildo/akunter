let demoData = [];

const numArr = [1, 2, 3, 4, 5, 6];

for (let i=0; i<100; i++) {
  let itemData = {}

  itemData.id = i;
  itemData.item = numArr[Math.floor(Math.random() * numArr.length)];
  itemData.time = i + 2;
  itemData.quantity = numArr[Math.floor(Math.random() * numArr.length)]; 

  demoData.push(itemData);
}

console.log(demoData);

export default demoData;
