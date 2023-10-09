import React from "react";
import LineCharts from "../../../reuseable components/LineCharts";

const CreateAccountChart = () => {
  return (
    <>
      <div className='row mt-3  g-2'>
        <div className='col-12 col-lg-6'>
        <div className="chart-container p-4 w-100 rounded shadow-sm ">
        <LineCharts chartData={data} />
        </div>
          
        </div>
        {/* chart 2 */}
        <div className='col-12 col-lg-6'>
        <div className="chart-container  p-4 w-100 rounded shadow-sm ">
        <LineCharts chartData={data}/>
        </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccountChart;
const data = [
    {name: "Mon", accounts: 3},
    {name: "Tue", accounts: 4},
    {name: "Wed", accounts: 2},
    {name: "Thu", accounts: 5},
    {name: "Fri", accounts: 3},
    {name: "Sat", accounts: 3},
    {name: "Sun", accounts: 3},
  ];
