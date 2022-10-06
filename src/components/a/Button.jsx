import React from 'react';

export default function Button(props) {

   return (
      <button ref={props.refName} className="underline-link active:text-red-500 hover:text-white  mx-1.5 sm:mx-6">
         {props.name}
      </button>
   );
}
