import mocker from 'mocker-data-generator';

const Demo = () => {
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
            console.log(data);
          },
          err => console.error(err)
      )

  return exportedData;
}

export default Demo;
