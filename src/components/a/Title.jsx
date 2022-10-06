import React from 'react';
import RedLine from './RedLine';

export default function Title(props) {

   return (
      <div className={`mb-10 ${props.justify}`}>
         <h1 className={`text-2xl font-black tracking-wide lg:text-4xl ${props.titleClass}`} >{props.title}</h1>
         <RedLine justify={props.justify}/>
         <p className={`mt-2 text-xl font-medium ${props.subtitleClass}`}>{props.subtitle}</p>
      </div>
   );
}
