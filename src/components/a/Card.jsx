import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Icon from './Icon';


export default function Card(props) {

   return (
      <div className="xl:w-1/4 md:w-1/2 p-4">
         <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={props.image} alt="content"></img>
            <h2 className="text-lg text-white font-medium title-font mb-4">{props.title}</h2>
            <p className="leading-relaxed text-base mb-4">{props.description}</p>
            <a href={props.url} className="flex items-center justify-center text-indigo-400">
               <Icon icon={<FaGithub/>} size="1rem"/>
               <p className="m-1 cursor-pointer text-center tracking-widest text-indigo-400 text-md font-medium title-font">
                  Go to Github
               </p>
            </a>
         </div>
      </div>
   );
}
