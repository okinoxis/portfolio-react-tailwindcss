import React from 'react';
import Button from './a/Button';

export default function NavBar(props) {

   return (
         <nav className="bg-neutral-900 sticky top-0 z-10 triggers">
            <div className="text-lg container flex items-center justify-center p-6 mx-auto text-gray-200 capitalize">
               <Button name="About me" refName={props.section1}></Button>
               <Button name="Skills" refName={props.section2}></Button>
               <Button name="Projects"refName={props.section3}></Button>
               <Button name="Contact" refName={props.section4}></Button>
            </div>
         </nav>
   );
}
