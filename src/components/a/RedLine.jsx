import React from 'react';

export default function RedLine(props) {

   return (
      <div className={`flex mt-3 ${props.justify}`}>
         <div className="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
      </div>
   );
}
