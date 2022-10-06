import React from 'react';
import Icon from './a/Icon';
import Title from './a/Title';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact(props) {

   return (
      <div ref={props.section4}  className="h-screen flex flex-col items-center justify-center sm:bg-neutral-900 bg-neutral-900 text-white">
         <section className="min-h-screen lg:bg-neutral-900 lg:flex">
            <div className="flex flex-col justify-center w-full p-8 lg:bg-neutral-800 lg:px-12 xl:px-32 lg:w-1/2">
               <Title  
                  title="Contact me" 
                  titleClass="text-white font-medium"
                  subtitle="I will reply as soon as possible" 
                  subtitleClass="text-gray-400"
                  Justify="justify-start" 
               />
               <div className="mt-6 md:mt-8">
                     <div className="flex mt-4 -mx-1.5 ">
                        <a href="/#" className="mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-red-500 mr-8">
                           <Icon size="3rem" icon={<FaGithub />} />
                        </a>
                        <a href="/#" className="mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-red-500 mr-8">
                           <Icon size="3rem" icon={<FaLinkedin />} />
                        </a>
                        <a href="/#" className="mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-red-500 mr-8">
                           <Icon size="3rem" icon={<FaInstagram />} />
                        </a>
                     </div>
               </div>
            </div>

            <div className="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24 ">
               <form>
                     <div className="-mx-2 md:items-center md:flex">
                        <div className="flex-1 px-2">
                           <label className="block mb-2 text-sm  text-gray-200">Full Name</label>
                           <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2  border  rounded-md placeholder-gray-500 bg-neutral-800 text-gray-300 border-transparent  focus:border-red-500  focus:outline-none" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                           <label className="block mb-2 text-sm  text-gray-200">Email address</label>
                           <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2   border  rounded-md placeholder-gray-500 bg-neutral-800 text-gray-300 border-transparent  focus:border-red-500  focus:outline-none" />
                        </div>
                     </div>

                     <div className="w-full mt-4">
                        <label className="block mb-2 text-sm  text-gray-200">Message</label>
                        <textarea className="block w-full h-32 px-5 py-3 mt-2  border  rounded-md placeholder-gray-500 bg-neutral-800 text-gray-300 border-transparent  focus:border-red-500  focus:outline-none" placeholder="Message"></textarea>
                     </div>

                     <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform rounded-md border bg-neutral-800 text-gray-300 border-transparent  focus:border-red-500 hover:bg-red-500 focus:bg-red-700  focus:outline-none">
                        get in touch
                     </button>
               </form>
            </div>
         </section>

      </div>
   );
}
