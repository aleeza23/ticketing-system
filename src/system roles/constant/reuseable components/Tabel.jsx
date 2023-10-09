import React from "react";


const Tabel = ({tabelHead, children}) => {
  return (
    <>
      <div className='table-responsive mt-4 '>
        <table className='table shadow-sm'>      
      
          <caption className='constant__text'>Your open tickets</caption>
          <thead>
            <tr className='constant__text'>
              <th scope='col'>#</th>
              {tabelHead.map((currElm , index) => {
               return <th scope='col' key={index}>{currElm}</th>
              })}  
            </tr>
          </thead>
          
          {children}
        </table>
      </div>
    </>
  );
};

export default Tabel;
