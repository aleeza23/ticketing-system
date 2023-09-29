import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const LineCharts = ({chartData}) => {
  return (
    <>
      <strong>32 manager accounts are created</strong>

      <ResponsiveContainer height={100} className='mt-2'>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' stroke='#bf00ff' />
          <XAxis dataKey='name' tick={{fill: "#bf00ff"}} />
          <Tooltip contentStyle={{border: "0", color: "#bf00ff"}} />
          <Line
            type='monotone'
            dataKey='accounts'
            stroke='#bf00ff'
            strokeWidth={2}
            dot={false}
            activeDot={{r: 5}}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineCharts;
