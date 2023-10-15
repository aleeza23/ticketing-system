import React from "react";
import Allusers from "./Allusers";

const AllUsersManager = () => {
  const managerAPI = 'http://localhost:9000/api/all-manager'

  return (
    <>
      <Allusers tittle='All Managers' API={managerAPI} />
    </>
  );
};

export default AllUsersManager;
