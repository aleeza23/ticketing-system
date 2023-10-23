import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const BarCharts = ({data}) => {

  return <>
     <ResponsiveContainer aspect={3} >
        <BarChart
          width={150}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#bf00ff" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          {/* <Bar dataKey="uv" fill="#e2a6f683" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
        </BarChart>
      </ResponsiveContainer>
  </>;
};

export default BarCharts;
