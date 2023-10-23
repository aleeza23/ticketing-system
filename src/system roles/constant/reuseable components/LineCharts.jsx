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
      <strong>Tickets Details</strong>

      <ResponsiveContainer aspect={3}  className='mt-2'>
        <LineChart width={730} height={400} data={chartData} >
          <CartesianGrid strokeDasharray='3 3' stroke='#bf00ff' />
          <XAxis dataKey='name' tick={{fill: "#bf00ff"}} interval={'preserveStartEnd'} />
          <Tooltip contentStyle={{border: "0", color: "#bf00ff"}} />
          <Line
          
            type='monotone'
            dataKey='tickets'
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
