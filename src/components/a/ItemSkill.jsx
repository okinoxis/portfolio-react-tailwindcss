import React from 'react';

export default function ItemSkill(props) {

   return (
      <div className=" p-4 md:w-1/3 flex flex-col text-center items-center">
         <div className="w-28 h-28 inline-flex items-center justify-center rounded-full bg-gray-800 mb-5 flex-shrink-0">
            <a href='#/' className=" text-indigo-400 transition-colors duration-300 transform hover:text-red-500">
               {props.svg}
            </a>
         </div>
         <div className="flex-grow">
            <h2 className="text-white text-lg title-font font-medium mb-3">{props.name}</h2>
         </div>
      </div>
   );
}
