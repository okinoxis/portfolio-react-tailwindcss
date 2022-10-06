import React from 'react';
import { IconContext } from 'react-icons';

export default function Icon(props) {

   return (
      <IconContext.Provider value={{ size:props.size }}>
         <div>
            {props.icon}
         </div>
      </IconContext.Provider>
   );
}
