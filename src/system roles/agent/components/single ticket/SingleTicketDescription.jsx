import { Descriptions } from "antd";
import React from "react";
const resCol = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 4,
    xxl: 4,
  };
const SingleTicketDescription = ({single}) => {
// console.log(single);

    return (
        <>
        <Descriptions className="constant__text mt-2 bg-white"  layout='vertical'
            bordered>
          <Descriptions.Item label={`Created By `}>
            {single.createdBy?.name}
          </Descriptions.Item>
          <Descriptions.Item label="Created At">
            {single.createdAt?.slice(0, 10)}
          </Descriptions.Item>
          <Descriptions.Item label="Priority">
          {single.priority}
          </Descriptions.Item>
          <Descriptions.Item label="Category">
            {single.category?.name}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {single?.description}
          </Descriptions.Item>
          
          <Descriptions.Item label="Picked At">
            {single?.pickedAt?.slice(0, 10)}
          </Descriptions.Item>
        </Descriptions>
        </>
      );
};

export default SingleTicketDescription;
