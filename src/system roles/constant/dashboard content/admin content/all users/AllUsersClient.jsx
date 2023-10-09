import React from "react";
import Allusers from "./Allusers";

const AllUsersClient = () => {
  const clientAPI = 'http://localhost:9000/api/all-client'

  return (
    <>
      <Allusers tittle='All Clients' API={clientAPI} />
    </>
  );
};

export default AllUsersClient;
