import React from "react";
import { Chart, registerShape, Axis, Tooltip, Interval, Interaction, Coordinate } from "bizcharts";

    

const ItemChart = (params) => {
  const dataFetch = params.dataFetch;

  let data = [
    {
      type: "CC",
      value: 27,
    },
    {
      type: "CO",
      value: 25,
    },
    {
      type: "CD",
      value: 5,
    },
    {
      type: "BD",
      value: 18,
    },
    {
      type: "BO",
      value: 15,
    },
    {
      type: "BM",
      value: 10,
    }
  ];

  const sliceNumber = 0.01;

  registerShape("interval", "sliceShape", {
    draw(cfg, container) {
      const points = cfg.points;
      let path = [];
      path.push(["M", points[0].x, points[0].y]);
      path.push(["L", points[1].x, points[1].y - sliceNumber]);
      path.push(["L", points[2].x, points[2].y - sliceNumber]);
      path.push(["L", points[3].x, points[3].y]);
      path.push("Z");
      path = this.parsePath(path);
      return container.addShape("path", {
        attrs: {
          fill: cfg.color,
          path: path
        }
      });
    }
  });

  return (
    <Chart data={data} height={300} autoFit >
      <Coordinate type="theta" radius={0.8} innerRadius={0.65} />
      <Axis visible={false} />
      <Tooltip showTitle={false} />
      <Interval
        adjust="stack"
        position="value"
        color="type"
        shape="sliceShape"
      />
      <Interaction type="element-single-selected" />
    </Chart>
  );
}

export default ItemChart;
