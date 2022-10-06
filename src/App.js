import React from "react";
import { useActiveMenu } from "react-active-menu";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {

   const {registerSection, registerTrigger } = useActiveMenu({
      offset: 60,
      smooth: true
   });

   return (
      <div className="relative">

         <NavBar 
            section1={registerTrigger('section-1')}
            section2={registerTrigger('section-2')}
            section3={registerTrigger('section-3')}
            section4={registerTrigger('section-4')}
         />

         <AboutMe section1={registerSection('section-1')}></AboutMe>
         <Skills section2={registerSection('section-2')}></Skills>
         <Projects section3={registerSection('section-3')}></Projects>
         <Contact section4={registerSection('section-4')}></Contact>
         
      </div>
   );
}
