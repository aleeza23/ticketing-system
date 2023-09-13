import React, { memo } from "react";

const Button = ({className, children ,onClick ,onSubmit}) => {
  const classes = `${className} constant-btn`;
  return (
    <>
      <button onClick={onClick} onSubmit={onSubmit} className={classes}>{children}</button>
    </>
  );
};

export default memo(Button);
