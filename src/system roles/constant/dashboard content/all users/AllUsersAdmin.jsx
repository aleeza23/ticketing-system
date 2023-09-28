import React from "react";
import Allusers from "./Allusers";

const AllUsersAdmin = () => {
  const adminAPI = 'http://localhost:9000/api/all-admin'

  return (
    <>
      <Allusers tittle='All Admins' API={adminAPI} />
    </>
  );
};

export default AllUsersAdmin;
