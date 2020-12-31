import mocker from 'mocker-data-generator';

let exportedData = []

let demoData = {
    id: {
        chance: 'guid'
    },
    item: {
        faker: 'random.number({"min": 1, "max": 6})'
    },
};

mocker()
    .schema('data', demoData, 3)
    .build()
    .then(
        data => {
          exportedData.push(data);
        },
        err => console.error(err)
    )

export default exportedData;
