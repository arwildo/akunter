import mocker from 'mocker-data-generator';
import React, { Component } from 'react';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      returnedData : []
    };
    this.demoData = {
        id: {
            chance: 'guid'
        },
        item: {
            faker: 'random.number({"min": 1, "max": 6})'
        },
    };

    this.runMocker = mocker()
                      .schema('data', this.demoData, 3)
                      .build()
                      .then(
                          data => {
                            console.log(data.data[0].id);
                          },
                          err => console.error(err)
                      )
  }

  render() {
    return this.state.returnedData;
  }
}


export default Demo;
