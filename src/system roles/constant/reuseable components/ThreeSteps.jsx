import {Breadcrumb} from "antd";
import React from "react";
import {Link} from "react-router-dom";

const Steps = ({
  from,
  to,
  fromPath,
  fromIcon,
  toIcon,
  center,
  centerIcon,
  centerPath,
}) => {
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: (
              <b className='d-flex align-items-center gap-2 text-muted'>
                {fromIcon}
                <Link to={fromPath} className='bread-text'>
                  {from}
                </Link>
              </b>
            ),
          },
          {
            title: (
              <b className='d-flex align-items-center gap-2 text-muted'>
                {centerIcon}
                <Link to={centerPath} className='bread-text'>
                  {center}
                </Link>
              </b>
            ),
          },
          {
            title: (
              <b className='d-flex align-items-center gap-2 breacdcrumb-active rounded  px-3'>
                {toIcon}
                <span>{to}</span>
              </b>
            ),
          },
        ]}
      />
    </>
  );
};

export default Steps;
