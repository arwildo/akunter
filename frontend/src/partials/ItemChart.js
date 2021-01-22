import React from "react";
import { Chart, registerShape, Axis, Tooltip, Interval, Interaction, Coordinate } from "bizcharts";

const ItemChart = (params) => {
  const dataFetch = params.dataFetch;
  const dataType = ["CC", "CO", "CD", "BD", "BO", "BM"];

  // ItemType and ItemValue
  let CCValue, COValue, CDValue, BDValue, BOValue, BMValue
  CCValue = COValue = CDValue = BDValue = BOValue = BMValue = 0;

  // Get type and value of data
  for (let i in dataFetch) {
    if (dataType[dataFetch[i].item-1] === "CC") {
      CCValue += dataFetch[i].quantity;
    }
    else if (dataType[dataFetch[i].item-1] === "CO") {
      COValue += dataFetch[i].quantity;
    }
    else if (dataType[dataFetch[i].item-1] === "CD") {
      CDValue += dataFetch[i].quantity;
    }
    else if (dataType[dataFetch[i].item-1] === "BD") {
      BDValue += dataFetch[i].quantity;
    }
    else if (dataType[dataFetch[i].item-1] === "BO") {
      BOValue += dataFetch[i].quantity;
    }
    else if (dataType[dataFetch[i].item-1] === "BM") {
      BMValue += dataFetch[i].quantity;
    }
  }

  let data = [
    {
      type: "CC",
      value: CCValue,
    },
    {
      type: "CO",
      value: COValue,
    },
    {
      type: "CD",
      value: CDValue,
    },
    {
      type: "BD",
      value: BDValue,
    },
    {
      type: "BO",
      value: BOValue,
    },
    {
      type: "BM",
      value: BMValue,
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
