import React from "react";
import PieCharts from "../../../constant/reuseable components/PieCharts";
import LineCharts from "../../../constant/reuseable components/LineCharts";
import {BsArchive} from "react-icons/bs";
import BarCharts from "../../../constant/reuseable components/BarCharts";
import useAgentTickets from "../../../Hook/custom hook/useAgentTickets";

const AgentVisualData = () => {
  const {
    ticketsList,
    pickedTicketsList,
    allResolved,
    handoverTickets,
    assignTickets,
  } = useAgentTickets();

  const data = [
    {name: "All Ticket", tickets: ticketsList.length},
    {name: "Picked Ticket", tickets: pickedTicketsList.length},
    {name: "Resolved Ticket", tickets: allResolved?.length},
    {name: "Handover Ticket", tickets: handoverTickets?.length},
    {name: "Assign Ticket", tickets: assignTickets?.length},
  ];
  // console.log(assignTickets.length, 'length');
  return (
    <>
      <div className='row g-3'>
        <div className='col-12 col-md-5 '>
          <div className='chart-container py-4 px-4 w-100 rounded shadow-sm'>           
            <PieCharts data={data1} />

          </div>

          <div className='row mt-3'>
            <div className='col-12'>
              <div className="chart-container py-4 px-4 rounded shadow-sm">
              <strong>SLA Breached</strong>
            <h2
              className='text-center'
              style={{fontSize: "11rem", color: "#bf00ff"}}
            >
              2
            </h2>
              </div>
            </div>
          </div>
        </div>

        <div className='col-12 col-md-7'>
          <div className='chart-container  p-4 w-100 rounded shadow-sm'>
            <LineCharts chartData={data} />
            {/* <BarCharts data={data2}/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentVisualData;
const data1 = [
  {name: "All Ticket", value: 300},
  {name: "Picked Ticket", value: 400},
  {name: "Resolved Ticket", value: 300},
  {name: "Handover Ticket", value: 500},
  {name: "Assign Ticket", value: 350},

];
