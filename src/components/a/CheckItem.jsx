import React from 'react';

export default function CheckItem(props) {

   return (
      <div className="flex items-center text-gray-800 -px-3">
            <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="mx-3">{props.name}</span>
      </div>
   );
}
