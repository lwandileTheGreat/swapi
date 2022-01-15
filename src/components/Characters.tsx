 import React, { useState } from "react";
 import { motion } from 'framer-motion';
import { ApolloError } from "@apollo/client";
import Character from "./Character";
import Pagination from "./Pagination";



import {
 Outlet
} from "react-router-dom";

interface Props {
  data: CallableFunction;
  currentPage: number;
}


    
    const Characters: React.FC<Props> = (Props) => {
  const {
    loading,
    error,
    data,
  }: {
    loading: boolean | undefined;
    error: ApolloError | undefined;
    data: any;
  } = Props.data();


  if (loading) return <img className="center" src={require("../images/Lightsaber-Progress-Bar.gif")} alt="loading"  width="500" />;
  if (error) return <p>Error :(</p>;
  let people: Array<{ name: string }>;


  //Get characters data and set it to people
  data.allPeople
    ? (people = data.allPeople)
    : data.person
    ? (people = data.person)
    : (people = data.people);

    
    
      
     //Hover sound
     function playAudio(){
     const mytrack = document.getElementById('mytrack');
      (mytrack as HTMLAudioElement).volume = 0.08;
      (mytrack as HTMLAudioElement).play();
    
     }
   
     function stopAudio(){
      const mytrack = document.getElementById('mytrack');

      (mytrack as HTMLAudioElement).currentTime = 0;
       (mytrack as HTMLAudioElement).pause();
     }
  return (
    <section className="mt-5">

         
      <div className="Character-grid">
      { people.map( (
     
           ({ name }: { name: string }, index: number): string =>
            (
              <motion.div layout
              whileHover={{ opacity: 0.5 }} onMouseEnter={() => playAudio()} onMouseLeave={() => stopAudio()}   className="items-center character" key={index} 
          
              ><Character name={name} index={index} /></motion.div>) as any
      
      ))}
    </div>
      <Pagination currentPage={Props.currentPage} />
    
     
    </section>
    
  );


};

export default Characters;
