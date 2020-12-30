import mocker from 'mocker-data-generator';

var demoData = {
    id: {
        chance: 'guid'
    },
    item: {
        faker: 'random.number({"min": 1, "max": 6})'
    },
};

mocker()
    .schema('cats', demoData, 3)
