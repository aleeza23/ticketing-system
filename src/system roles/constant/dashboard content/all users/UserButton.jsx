import {Button} from "antd";
import React from "react";

const UserButton = ({children, className, onClick}) => {
  const classes = `${className} users-btn mb-3`;
  return (
    <>
      <Button type='default' size='small' className={classes} onClick={onClick}>
        {children}
      </Button>
    </>
  );
};

export default UserButton;
