import React from 'react';
import {
	Chart,
	Interval,
	Tooltip,
	Axis,
	Coordinate,
	Interaction,
	getTheme
} from 'bizcharts';


function ItemChart() {
	const data = [
		{ item: 'Chicken Crispy', count: 40, percent: 0.4 },
		{ item: 'Chicken Deluxe', count: 21, percent: 0.21 },
		{ item: 'Beef Cheese', count: 17, percent: 0.17 },
		{ item: 'Beef Deluxe', count: 13, percent: 0.13 },
		{ item: 'Chicken Original', count: 9, percent: 0.09 },
	];

	const cols = {
		percent: {
			formatter: val => {
				val = val * 100 + '%';
				return val;
			},
		},
	};

  return (
		<Chart height={300} data={data} scale={cols} autoFit>
			<Coordinate type="theta" radius={0.75} />
			<Tooltip showTitle={false} />
			<Axis visible={false} />
			<Interval
				position="percent"
				adjust="stack"
				color="item"
				style={{
					lineWidth: 1,
					stroke: '#fff',
				}}
				label={['count', {
					content: (data) => {
						return `${data.item}: ${data.percent * 100}%`;
					},
				}]}
				state={{
					selected: {
						style: (t) => {
							const res = getTheme().geometries.interval.rect.selected.style(t);
							return { ...res, fill: 'red' }
						}
					}
				}}
			/>
			<Interaction type='element-single-selected' />
		</Chart>
  );
}

export default ItemChart;
