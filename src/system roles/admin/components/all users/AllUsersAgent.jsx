import React from "react";
import Allusers from "./Allusers";

const AllUsersAgent = () => {
  const agentAPI = 'http://localhost:9000/api/all-agent'

  return (
    <>
      <Allusers tittle='All Agents' API={agentAPI} />
    </>
  );
};

export default AllUsersAgent;
