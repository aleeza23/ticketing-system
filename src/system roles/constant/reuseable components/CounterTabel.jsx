import React, {useEffect, useState} from "react";
import UserButton from "../dashboard content/admin content/all users/UserButton";
import {GoLinkExternal} from "react-icons/go";

const CounterTabel = ({index, currElm}) => {
  console.log(currElm, "curElm");
  const [createdAt, setCreatedAt] = useState(new Date(currElm.createdAt));
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = Math.floor((currentTime - createdAt) / 1000); 

      const minutes = Math.floor(timeDifference / 60);
      const seconds = timeDifference % 60;
      setMin(minutes);
      setSec(seconds);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [createdAt]);

  return (
    <>
      <tr key={index} className='constant__text'>
        <th scope='row'>{++index}</th>
        <td>{currElm?.title}</td>
        <td>{currElm?.description}</td>
        <td>{currElm?.priority}</td>
        <td>{currElm?.createdAt?.slice(0, 10)}</td>
        <td>
          {min > 10 ? (
            <UserButton className={"btn-danger text-white mb-0"}>
              Yes
            </UserButton>
          ) : (
            <>
              {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}
            </>
          )}
        </td>
        <td>{currElm?.createdAt?.slice(0, 10)}</td>
        <td>
          <GoLinkExternal style={{color: "#bf00ff", cursor: "pointer"}} />
        </td>
      </tr>
    </>
  );
};

export default CounterTabel;
