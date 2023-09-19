import {Layout} from "antd";
import React from "react";

const DashboardContent = ({children}) => {
  const {Content} = Layout;

  return (
    <>
      <Content className='p-4 '>{children}</Content>
    </>
  );
};

export default DashboardContent;
