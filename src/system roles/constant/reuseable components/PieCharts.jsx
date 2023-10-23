import React from "react";
import {PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend,Tooltip} from "recharts";
const PieCharts = ({data}) => {

  const COLORS = ["#bf00ff", "#e2a6f683", "	#DBA5FF", "#B17BE3", "#C673FF" ," #D291FF"];
  
    return (
      <>
       <ResponsiveContainer  aspect={3}>
       <PieChart  >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            // label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
           <Tooltip contentStyle={{border: "0", color: "#bf00ff"}} />
          <Legend  />
        </PieChart>
      </ResponsiveContainer>
      </>
    );
  };


export default PieCharts;
