import React from 'react';
import Title from './a/Title';
import Card from './a/Card';

export default function Projects(props) {

   return (
      <div ref={props.section3}  className="h-screen flex flex-col items-center justify-center bg-purple-600 text-white">

         <section className="text-gray-400 body-font overflow-y-auto overflow-x-hidden h-screen w-full">
            <div className="container px-5 py-24 mx-auto">
               <Title 
                  title="Projects"
                  titleClass="text-white font-medium"
                  justify="justify-end text-right"
               />

               <div className="flex flex-wrap -m-4 mt-5">
                  <Card
                     image="https://dummyimage.com/720x400"
                     title="Chichen Itza"
                     subtitle="SUBTITLE"
                     description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
                     url="#/"
                  />
                  <Card
                     image="https://dummyimage.com/720x400"
                     title="Chichen Itza"
                     subtitle="SUBTITLE"
                     description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
                     url="#/"
                  />
                  <Card
                     image="https://dummyimage.com/720x400"
                     title="Chichen Itza"
                     subtitle="SUBTITLE"
                     description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
                     url="#/"
                  />
                  <Card
                     image="https://dummyimage.com/720x400"
                     title="Chichen Itza"
                     subtitle="SUBTITLE"
                     description="Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
                     url="#/"
                  />
               </div>
            </div>
         </section>

      </div>
   );
}
