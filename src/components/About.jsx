import React from 'react'
import '../css/About.css'
import Image3 from "../assets/7.JPG"
import { Zoom } from 'react-reveal';

const About = () => {

  const des = "A tech enthusiast who loves to learn and develop software projects in various domains. The ultimate goal is to make technology beneficial for everyone.";


  return (
    <div className='main4'>
      <Zoom><p>About</p></Zoom> 
      <Zoom up cascade><div className='row'>
        <img src={Image3} className="image" style={{borderRadius:"20px"}}/>
        <p>{des}</p>
      </div>
      </Zoom>
    </div>
  )
}

export default About