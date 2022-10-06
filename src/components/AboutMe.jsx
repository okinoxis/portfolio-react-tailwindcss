import React from 'react';
import CheckItem from './a/CheckItem';
import Title from './a/Title';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Icon from './a/Icon';

export default function AboutMe(props) {

   return (
      <div ref={props.section1}  className="flex flex-col items-center justify-start bg-amber-300 overflow-y-auto overflow-x-hidden h-screen">
         <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center ">
            <div className="w-full lg:w-1/2">
                  <div className="lg:max-w-lg">
                     <Title  
                     title="Nicolas Cristobal" 
                     subtitle="Full-Stack Developer" 
                     Justify="justify-start" 
                     />
                     <div className="grid gap-6 mt-8 sm:grid-cols-2">
                        <CheckItem name="Flexibility/adaptability"/>
                        <CheckItem name="Problem solving skills"/>
                        <CheckItem name="Teamwork"/>
                        <CheckItem name="Continuous learning"/>
                        <CheckItem name="Positive attitude"/>
                        <CheckItem name="Creativity"/>
                        <CheckItem name="Initiative"/>
                        <CheckItem name="Dedication"/>
                     </div>
                  </div>
            </div>

            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                  <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://dc722jrlp2zu8.cloudfront.net/media/academy/scope/StockSnap_A28WZDTYEY.jpg" alt=""></img>
            </div>
         </div>

         <div className="w-full flex flex-col items-center justify-start gap-8 mt-1 mb-1">
            <h1 className="text-3xl text-gray-800 leading-relaxed text-center w-4/5">
               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            </h1>
            <div className="flex items-center gap-4">
               <div className="rounded-full w-24 h-24 bg-black overflow-hidden">
                     <img alt="" src="https://avatars.githubusercontent.com/u/78431383?v=4"></img>
               </div>
            </div>
         </div>

         <div className="mt-5">
               <div className="flex items-center justify-start">
                  <a href="/#" className=" text-gray-800 transition-colors duration-300 transform hover:text-red-500 p-1">
                     <Icon size="2rem" icon={<FaGithub />} />
                  </a>
                  <a href="/#" className=" text-gray-800 transition-colors duration-300 transform hover:text-red-500 p-1">
                     <Icon size="2rem" icon={<FaLinkedin />} />
                  </a>
                  <a href="/#" className=" text-gray-800 transition-colors duration-300 transform hover:text-red-500 p-1">
                     <Icon size="2rem" icon={<FaInstagram />} />
                  </a>
               </div>
         </div>

      </div>
   );
}
