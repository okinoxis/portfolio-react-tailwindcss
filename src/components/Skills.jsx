import React from 'react';

import { DiJavascript1, DiPostgresql, DiDocker, DiMongodb, DiPhp } from 'react-icons/di';
import { FaReact, FaLaravel } from 'react-icons/fa';
import {AiOutlineHtml5} from 'react-icons/ai';
import {TbBrandCss3} from 'react-icons/tb';

import ItemSkill from './a/ItemSkill';
import Title from './a/Title';
import Icon from './a/Icon';

export default function Skills(props) {

   const items = [{name:"React", "icon": <FaReact />}, 
                  {name:"JavaScript", "icon": <DiJavascript1 />},
                  {name:"PostgreSQL", "icon": <DiPostgresql />}, 
                  {name:"Docker", "icon": <DiDocker />}, 
                  {name:"Laravel", "icon": <FaLaravel />},
                  {name:"MongoDB", "icon": <DiMongodb />}, 
                  {name:"PHP", "icon": <DiPhp />},
                  {name:"HTML5", "icon": <AiOutlineHtml5 />},
                  {name:"CSS3", "icon": <TbBrandCss3 />}]

   return (
      <div ref={props.section2}  className="h-screen flex flex-col items-center justify-center bg-indigo-600 text-white">
         <section className="text-gray-400 body-font overflow-y-auto overflow-x-hidden h-screen">
            <div className="container px-5 py-24 mx-auto">
               <Title 
                  title="Skills"
                  titleClass="text-white font-medium"
                  justify="text-center justify-center mb-20"
               />
               <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

                  {items.map((item) => 
                     <ItemSkill
                        key={item.name}
                        name={item.name}
                        svg={<Icon size="5rem" icon={item.icon} />}
                     />
                  )}

               </div>
            </div>
         </section>

      </div>
   );
}
