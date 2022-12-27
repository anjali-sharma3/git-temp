import React,{useState} from 'react';
import Typewriter from "typewriter-effect";
import './about.css';

const About=()=>{
  // const[state]=useState(
  //   {
  //    text1:"Welcome",
  //    text2:"to",
  //    text3:"Technopedia", 
  //   }
  // );
  return(
    <>
    <div className="about">
      <div className="about-intro">
        {/* <h2>
          <div className="title">{state.text1}</div>
          <div className="title">{state.text2}</div>
          <div className="title">{state.text3}</div>
        </h2> */}
        <div className="text">
          {/* <Typewriter>
            options={
              {
                autoStart:true,
                loop:true,
                delay:50,
                strings:[
                  'Read Technology',
                  'Think Technology',
                  'Build Technology'

                ]

              }
            }
          </Typewriter> */}
          

          <div className="About">
          <Typewriter 


      onInit={(typewriter)=> {
      
      typewriter       
      .typeString("Welcome to Technopedia" )
      
       .pauseFor(1000)
       
       .deleteAll()
        
       .typeString("Read Technology")
       
       .pauseFor(1000)
       .deleteAll()
       .typeString("Think Technology")
       .pauseFor(1000)
       .deleteAll()
       .typeString("Build Technology")
       
       .pauseFor(1000)
       .deleteAll()
       
       .start();
       }}
       />
</div>

        </div>
      </div>
    </div>
    </>
  );
}

 export default About; 